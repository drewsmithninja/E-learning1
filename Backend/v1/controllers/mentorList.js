import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";
import skills from "../models/Skills.js";
import userEducation from "../models/UserEducation.js";
import certification from "../models/UserCertification.js";
import languages from "../models/Language.js";
import userExperience from "../models/UserExperience.js";

import {ObjectId} from 'mongodb'; // or ObjectID 

// These mentors can give mentorship to the user having menteeTopics similar to the user's mentorsTopic
export const getFilteredMentorLIst = async (req, res) => {
    const loggedInUser = req.user;
    let {menteeTopics: topics} = req.user; // yahan pr topics ki jgh req.user ki menteeTopics aayegi    --->>> let { topics } = req.body;
    // let id = req.params.linkedinId;
    try {
        // let loggedUser = await user.find({ linkedinId: id });
        // let topics = loggedUser[0].menteeTopics;
        let data = [];
        if (topics.length == 0) {
            let fetchedUsers = await user.find({ _id: { $ne: loggedInUser._id } }).limit(8);
            for (let i = 0; i < fetchedUsers.length; i++) {
                data.push(fetchedUsers[i]);
            }
        }

        if (topics.length == 1) {
            let fetchedUsers = await user.find({ _id: { $ne: loggedInUser._id }, mentorTopics: topics[0] }).limit(8);
            for (let i = 0; i < fetchedUsers.length; i++) {
                data.push(fetchedUsers[i]);
            }
        };

        if (topics.length >= 2) {
            for (let i = 0; i < topics.length; i++) {
                let fetchedUsers = await user.find({_id: { $ne: loggedInUser._id }, mentorTopics: topics[i] });
                for (let j = 0; j < fetchedUsers.length; j++) {
                    data.push(fetchedUsers[j]);
                }
                if (i >= 2)
                    break;
            }
        };

        const mentorsArr = [];
        const uniqMentors = (data = []) => {
            const map = {};
            for (let i = 0; i < data.length; i++) {
                if (!map[data[i]]) {
                    map[data[i]] = true;
                    mentorsArr.push(data[i]);
                };
            };
            return mentorsArr.sort((a, b) => a - b);
        };
        uniqMentors(data);

        // Removing user's own id from menteesArr:
        for (let mentor of mentorsArr) {
            if (mentor.linkedinId === req.user.linkedinId) {
                mentorsArr.splice(mentor, 1)
            }
        };

        let finalData = mentorsArr.map(({ linkedinId, firstName, lastName, _id, profilePicture, currentJobTitle, currentCompany, mentorTopics }) => {
            let output = {
                "id": _id,
                "firstName": firstName,
                "lastName": lastName,
                "linkedinId": linkedinId,
                "profilePicture": profilePicture,
                "currentJobTitle": currentJobTitle,
                "currentCompany": currentCompany,
                "mentorTopics": mentorTopics,
            }
            return output;
        });

        const result = {
            dataLength: mentorsArr.length,
            menteeTopics: topics,
            data: finalData
        };

        Response.success(res, "Mentors found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const getMentorDetails = async (req, res) => {
    try{ 
        const users=await user.find({_id:ObjectId(req.body.userId)},{_id:1,firstName:1,lastName:1,profilePicture:1,currentJobTitle:1,location:1,createdAt:1}).lean()
        const skillsData= await skills.find({user:ObjectId(req.body.userId)},{_id:1,title:1}).lean()
        const educationData= await userEducation.find({user:ObjectId(req.body.userId)},{_id:1,degreeName:1,startYear:1,endYear:1}).lean()
        const certificationData= await certification.find({user:ObjectId(req.body.userId)},{_id:1,certificateName:1,issueDate:1,expiryDate:1,issuingOrganization:1}).lean()
        const languagesData=await languages.find({user:ObjectId(req.body.userId)},{_id:1,language:1}).lean()
        const userExperienceData=await userExperience.find({user:ObjectId(req.body.userId)},{_id:1,jobTitle:1,companyName:1,startData:1,endDate:1,present:1}).lean()
        const userData = {...users[0]}
        if(skillsData.length>0 ||educationData.length>0||certificationData.length>0 || languagesData.length>0||userExperienceData.length>0){
           userData.skills=skillsData
           userData.education=educationData
           userData.certification=certificationData,
           userData.language=languagesData
           userData.experience=userExperienceData
        }
        
        if(users.length>0){
            Response.success(res, "Mentor found successfully!", userData);
        }else{
            Response.success(res, "No mentors found.", users);
        }
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
export const getFilteredMentorGetList = async (req, res) => {
 
    try {
        var conditions = {
            $or: [
                {
                    'email': {
                        $regex: '^' + req.body.searchParam,
                        $options: 'i'
                    }
                },
                {
                    'firstName': {
                        $regex: '^' + req.body.searchParam,
                        $options: 'i'
                    }
                }
                

            ]
        };
        var and_clauses = [];

        and_clauses.push({
            $and: [{ $expr: { $gte:  ["$pricingsDetails.price",req.body.minPrice]} }, { $expr: {$lte: ["$pricingsDetails.price",req.body.maxPrice] } }],
        });
        if(req.body.sortby==5){
            req.body.sortby={
                "price":-1
            }
        }else if(req.body.sortby==2){
            req.body.sortby={
                "rating":-1
            }
        }else if(req.body.sortby==3){
            req.body.sortby={
                "userExperience":-1
            }
        }else if(req.body.sortby==4){
            req.body.sortby={
                "session":-1
            }
        }else if( req.body.sortby==1){
            req.body.sortby={
                "recommanded":-1
            }
        }
       conditions['$and'] = and_clauses;
        let users = await user.aggregate([
            {
            "$lookup": {
                "from": "pricings",
                "localField": "_id",
                "foreignField": "user",
                "as": "pricingsDetails"
            },
        },
        {
            $unwind: {path: '$pricingsDetails' }
        },
        {
            "$lookup": {
                "from": "sessions",
                 "localField": "_id",
                 "foreignField": "mentor",
                'let': {"searchId":  {$convert: {input: req.body.session, to : 'objectId', onError: '',onNull: '',
            }}},
                "pipeline":[
                    {"$match": {"$expr":[{"_id": "$$searchId"}]}},{$project: { time: {
                        $dateFromString: {
                        dateString: {$concat: ["2012-03-03 ", "$time"]} }, 
                    }}
                },{"$match":{
                    $and: [{ $expr: { $gt:  ["$time",new Date(`2012-03-03T${req.body.startTime}.000Z`)]} },{ $expr: { $lt:  ["$time",new Date(`2012-03-03T${req.body.endTime}.000Z`)]} }]
                }}
                  ],
                "as": "sessionsDetails",
            },
            
        },
        
        {   $match: { sessionsDetails: { $ne: [] } }},
        {
            "$lookup": {
                "from": "userexperiences",
                 "localField": "_id",
                 "foreignField": "user",
                "as": "userexperiencesDetails"
            },
        },
        {
            "$lookup": {
                "from": "skills",
                "localField": "_id",
                "foreignField": "user",
                "as": "skillsDetails"
            },
        },
        {
            $unwind: {path: '$skillsDetails', }
        },
        {$addFields : {
            sessionCount:{$size:"$sessionsDetails"},
            userExperience:{$size:"$userexperiencesDetails"},
            
            isMatch : { $and : [
                { $ne : ["$skillsDetails.rating" , "" ] }]
            }
        }
        },
        
        {
            $match: conditions
        },
       
        {
            $group: {
                _id: "$_id",
                firstName: {
                    $first: "$firstName"
                },
                lastName: {
                    $first: "$lastName"
                },
                profilePicture:{
                    $first:"$profilePicture"
                },
                currentJobTitle:{ $first: "$currentJobTitle"},
                price: {
                    $first:"$pricingsDetails.price"
                },
                skills: {
                    $push: {
                        "_id":"$skillsDetails._id",
                        "title":"$skillsDetails.title"
                    }
                },
                
                ratingCount:{ $sum : "$skillsDetails.rating" },
                skillDataCount:{ $sum : { $cond : [ "$isMatch" , 1, 0 ]  } },
                userExperience:{$first : "$userExperience"},
                session:{$first:"$sessionCount"},

            }
        },
        {
            $addFields:{
               
              rating: { $round: [ {$divide: ["$ratingCount","$skillDataCount"]}, 1 ] },
              skillDataCount:  "$$REMOVE"
            }
         },
        {
            "$sort":req.body.sortby
        },
        ]).exec();
        if(users.length>0){
            Response.success(res, "Mentors found successfully!", users);
        }else{
            Response.success(res, "No mentors found.", users);
        }
       
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

