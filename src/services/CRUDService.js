import db from "../models/index";
// let createData = async(text) =>{
//     return new Promise(async(resolve,reject) =>{
//         await handleData(text.text);
//         // console.log(data);
//         // try{
//         //     await db.User.create({
//         //         // MaMH: data.courseID,
//         //         // TenMH: data.courseName,
//         //         // SoTC: data.courseCredits,
//         //         // Nhom: data.courseGroup,
//         //         // Schedule: data.schedule, 

//         //         MaMH: data[0],
//         //         TenMH: data[1],
//         //         SoTC: data[2],
//         //         Nhom: data[3],
//         //         Schedule: data[4], 
//         //     })

//         //      resolve("Add successfull")

//         // }catch(e){
//         //     reject(e);
//         // }
//         // console.log(data);
//     })  

//     console.log(data);
// }

// MaMH: DataTypes.STRING,
// TenMH: DataTypes.STRING,
// SoTC: DataTypes.INTEGER,
// Nhom: DataTypes.INTEGER,
// Schedule: DataTypes.STRING



let createData =(document) =>{
    return new Promise((resolve,reject) =>{
        try{
            // console.log(document);
            const text = document.text.replace(/[\n\r]/g, "");/// replaceAll not valid in js syntax
            console.log(text);
            const lines=text.split(/-\s*\t/);/// split line to smaller  | if you can try with regular expressioon you have to remove '' in split method
            //  console.log(lines);
            ///loop for every subject
            lines.forEach(lines => {
                const groupName=lines.match(/\d+\s*(-+)/);
                console.log('/n======/n'); 
                console.log(lines);
               // // console.log(groupName);       
                let positonGr=lines.search(groupName[1]);
                const course=lines.trim().substring(0,positonGr);
                const schedule=lines.trim().substring(positonGr);
                /// handle data course 
                 console.log(course);
                const course_1 = course.split('\t');
                const courseID=course_1[0];
                const courseName=course_1[1];
                const courseCredits=course_1[2];
                const courseGroup=course_1[3];
                // console.log(courseName);
                //handle data schedule
                const dataSchedule = [];
                
                db.User.create({
                    // MaMH: data.courseID,
                    // TenMH: data.courseName,
                    // SoTC: data.courseCredits,
                    // Nhom: data.courseGroup,
                    // Schedule: data.schedule, 
    
                    MaMH: courseID,
                    TenMH: courseName,
                    SoTC: courseCredits,
                    Nhom: courseGroup,
                    ScheduleID: courseID+'-'+courseGroup, 
                })
                const matches = schedule.trim().matchAll(/ *-*(\d+)-+, Thứ (\w*), Phòng(\s+), \s*-(\S+\d)-{10}/g);//(\d+)\s
                    if (!matches) {
                        return null;
                    }else{
                        //  console.log(matches);
                        for(const match of matches ){
                            const [_,period,day,phong, time] = match;
                            db.Schedule.create({
                                //scheduleID: DataTypes.STRING,
                                // period: DataTypes.STRING,
                                // day: DataTypes.String,
                                // phong: DataTypes.STRING,
                                // week: DataTypes.STRING
                                ScheduleID:courseID+'-'+courseGroup,
                                Period:period,
                                Day:day,
                                Phong:phong,
                                Week:time,
                            })
                            // dataSchedule.push({period,day,phong, time});
                        }
                    }
                

                resolve();
                // resolve([courseID,courseName,courseCredits,courseGroup,schedule])
                //  resolve([{courseID:courseID},{courseName:courseName},{courseCredits:courseCredits},{courseGroup:courseGroup},{schedule:schedule}])
            });
        } catch(e){
            reject(e);
        }
    })  
}


module.exports={
    createData:createData,
}


