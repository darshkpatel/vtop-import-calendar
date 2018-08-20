const app = require('vitauth2');
var fs = require('fs');
const request = require('request-promise-native');
var schedule = require('./schedule');
var ical = require('ical-generator');
const configs = require('./config');
cal = ical();

const start = configs.start
const end = configs.end
const semID = configs.semID

cookie = app.getAuthCookie(configs.username, configs.password, reqpage);
var duration_class = 50;
var duration_lab = 45;
const days = ['su', 'mo', 'tu', 'we', 'th', 'fr','sa'];
function addClass(block, class_code, faculty,class_desc, location, day){
    if(block[0]=='L'){
        var et =  new Date(createTimefromBlock(block,day).valueOf() + 60*duration_lab*1000);
    }
    else{
        var et =  new Date(createTimefromBlock(block,day).valueOf() + 60*duration_class*1000); 
    }
    var event = cal.createEvent({
        start: new Date(createTimefromBlock(block, day)),
        end: new Date(et),
        timestamp: new Date(),
        summary: class_code + ' at ' + location,
        description: block + '-' +class_desc +' by ' +faculty,
        timezone:"Asia/Calcutta",
        organizer: ''
    });


    event.repeating({
        freq: 'WEEKLY', // required
        until: end,
        byDay: days[day] 
        
    });
    cal.saveSync('final.ical');  
}


function createTimefromBlock(blk, day){

    var blockTiming = {};
    day = days[day]
    blockTiming["A1"] = {"mo":[8,0], "we":[9,0]};
    blockTiming["B1"] = {"tu":[8,0], "th":[9,0]};
    blockTiming["C1"] = {"we":[8,0], "fr":[9,0]};
    blockTiming["D1"] = {"th":[8,0], "mo":[10,0]};
    blockTiming["E1"] = {"fr":[8,0], "tu":[10,0]};
    blockTiming["F1"] = {"mo":[9,0], "we":[10,0]};
    blockTiming["G1"] = {"tu":[9,0], "th":[10,0]};
    blockTiming["A2"] = {"mo":[14,0], "we":[14,0]};
    blockTiming["B2"] = {"tu":[14,0], "th":[14,0]};
    blockTiming["C2"] = {"we":[14,0], "fr":[14,0]};
    blockTiming["D2"] = {"th":[14,0], "mo":[14,0]};
    blockTiming["E2"] = {"fr":[14,0], "tu":[14,0]};
    blockTiming["F2"] = {"mo":[15,0], "we":[16,0]};
    blockTiming["G2"] = {"tu":[15,0], "th":[16,0]};
    blockTiming["TB1"] = {"mo":[11,0]};
    blockTiming["TG1"] = {"mo":[12,0]};
    blockTiming["TC1"] = {"tu":[11,0]};
    blockTiming["TAA1"] = {"tu":[12,0]};
    blockTiming["V1"] = {"we":[11,0]};
    blockTiming["V1"] = {"we":[12,0]};
    blockTiming["TE1"] = {"th":[11,0]};
    blockTiming["TCC1"] = {"th":[12,0]};
    blockTiming["TF1"] = {"fr":[11,0]};
    blockTiming["TD1"] = {"fr":[12,0]};
    blockTiming["TB2"] = {"mo":[17,0]};
    blockTiming["TG2"] = {"mo":[18,0]};
    blockTiming["TC2"] = {"tu":[17,0]};
    blockTiming["TAA2"] = {"tu":[18,0]};
    blockTiming["TD2"] = {"we":[17,0]};
    blockTiming["TBB2"] = {"we":[18,0]};
    blockTiming["TE2"] = {"th":[17,0]};
    blockTiming["TCC2"] = {"th":[18,0]};
    blockTiming["TF2"] = {"fr":[17,0]};
    blockTiming["TDD2"] = {"fr":[18,0]};
    blockTiming["L1"] = {"mo":[8,0]};
    blockTiming["L2"] = {"mo":[8,46]};
    blockTiming["L3"] = {"mo":[10,0]};
    blockTiming["L4"] = {"mo":[10,46]};
    blockTiming["L5"] = {"mo":[11,31]};
    blockTiming["L6"] = {"mo":[12,16]};
    blockTiming["L7"] = {"tu":[8,0]};
    blockTiming["L8"] = {"tu":[8,46]};
    blockTiming["L9"] = {"tu":[10,0]};
    blockTiming["L10"] = {"tu":[10,46]};
    blockTiming["L11"] = {"tu":[11,31]};
    blockTiming["L12"] = {"tu":[12,16]};
    blockTiming["L13"] = {"we":[8,0]};
    blockTiming["L14"] = {"we":[8,46]};
    blockTiming["L15"] = {"we":[10,0]};
    blockTiming["L16"] = {"we":[10,46]};
    blockTiming["L19"] = {"th":[8,0]};
    blockTiming["L20"] = {"th":[8,46]};
    blockTiming["L21"] = {"th":[10,0]};
    blockTiming["L22"] = {"th":[10,46]};
    blockTiming["L23"] = {"th":[11,31]};
    blockTiming["L24"] = {"th":[12,16]};
    blockTiming["L25"] = {"fr":[8,0]};
    blockTiming["L26"] = {"fr":[8,46]};
    blockTiming["L27"] = {"fr":[10,0]};
    blockTiming["L28"] = {"fr":[10,46]};
    blockTiming["L29"] = {"fr":[11,31]};
    blockTiming["L30"] = {"fr":[12,16]};
    blockTiming["L31"] = {"mo":[14,0]};
    blockTiming["L32"] = {"mo":[14,46]};
    blockTiming["L33"] = {"mo":[16,0]};
    blockTiming["L34"] = {"mo":[16,46]};
    blockTiming["L35"] = {"mo":[17,31]};
    blockTiming["L36"] = {"mo":[18,16]};
    blockTiming["L37"] = {"tu":[14,0]};
    blockTiming["L38"] = {"tu":[14,46]};
    blockTiming["L39"] = {"tu":[16,0]};
    blockTiming["L40"] = {"tu":[16,46]};
    blockTiming["L41"] = {"tu":[17,31]};
    blockTiming["L42"] = {"tu":[18,16]};
    blockTiming["L43"] = {"we":[14,0]};
    blockTiming["L44"] = {"we":[14,46]};
    blockTiming["L45"] = {"we":[16,0]};
    blockTiming["L46"] = {"we":[16,46]};
    blockTiming["L47"] = {"we":[17,31]};
    blockTiming["L48"] = {"we":[18,16]};
    blockTiming["L49"] = {"th":[14,0]};
    blockTiming["L50"] = {"th":[14,46]};
    blockTiming["L51"] = {"th":[16,0]};
    blockTiming["L52"] = {"th":[16,46]};
    blockTiming["L53"] = {"th":[17,31]};
    blockTiming["L54"] = {"th":[18,16]};
    blockTiming["L55"] = {"fr":[14,0]};
    blockTiming["L56"] = {"fr":[14,46]};
    blockTiming["L57"] = {"fr":[16,0]};
    blockTiming["L58"] = {"fr":[16,46]};
    blockTiming["L59"] = {"fr":[17,31]};
    blockTiming["L60"] = {"fr":[18,16]};

var final_date = getNextDayOfWeek(start, parseInt(days.indexOf(day))).setHours(blockTiming[blk][day][0],blockTiming[blk][day][1]);
var temp_date = new Date(final_date)
var super_final = new Date(temp_date.valueOf() + 60*330*1000);

return new Date(super_final)
}

function getNextDayOfWeek(date, dayOfWeek) {
    // Cmoths are from 0-11
    //week starts from 1
    var resultDate = new Date(date.getTime());

    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);

    return resultDate;
}




var blockTiming = {};
blockTiming["A1"] = {"mo":[8,0], "we":[9,0]};
blockTiming["B1"] = {"tu":[8,0], "th":[9,0]};
blockTiming["C1"] = {"we":[8,0], "fr":[9,0]};
blockTiming["D1"] = {"th":[8,0], "mo":[10,0]};
blockTiming["E1"] = {"fr":[8,0], "tu":[10,0]};
blockTiming["F1"] = {"mo":[9,0], "we":[10,0]};
blockTiming["G1"] = {"tu":[9,0], "th":[10,0]};
blockTiming["A2"] = {"mo":[14,0], "we":[14,0]};
blockTiming["B2"] = {"tu":[14,0], "th":[14,0]};
blockTiming["C2"] = {"we":[14,0], "fr":[14,0]};
blockTiming["D2"] = {"th":[14,0], "mo":[14,0]};
blockTiming["E2"] = {"fr":[14,0], "tu":[14,0]};
blockTiming["F2"] = {"mo":[15,0], "we":[16,0]};
blockTiming["G2"] = {"tu":[15,0], "th":[16,0]};
blockTiming["TB1"] = {"mo":[11,0]};
blockTiming["TG1"] = {"mo":[12,0]};
blockTiming["TC1"] = {"tu":[11,0]};
blockTiming["TAA1"] = {"tu":[12,0]};
blockTiming["V1"] = {"we":[11,0]};
blockTiming["V1"] = {"we":[12,0]};
blockTiming["TE1"] = {"th":[11,0]};
blockTiming["TCC1"] = {"th":[12,0]};
blockTiming["TF1"] = {"fr":[11,0]};
blockTiming["TD1"] = {"fr":[12,0]};
blockTiming["TB2"] = {"mo":[17,0]};
blockTiming["TG2"] = {"mo":[18,0]};
blockTiming["TC2"] = {"tu":[17,0]};
blockTiming["TAA2"] = {"tu":[18,0]};
blockTiming["TD2"] = {"we":[17,0]};
blockTiming["TBB2"] = {"we":[18,0]};
blockTiming["TE2"] = {"th":[17,0]};
blockTiming["TCC2"] = {"th":[18,0]};
blockTiming["TF2"] = {"fr":[17,0]};
blockTiming["TDD2"] = {"fr":[18,0]};
blockTiming["L1"] = {"mo":[8,0]};
blockTiming["L2"] = {"mo":[8,46]};
blockTiming["L3"] = {"mo":[10,0]};
blockTiming["L4"] = {"mo":[10,46]};
blockTiming["L5"] = {"mo":[11,31]};
blockTiming["L6"] = {"mo":[12,16]};
blockTiming["L7"] = {"tu":[8,0]};
blockTiming["L8"] = {"tu":[8,46]};
blockTiming["L9"] = {"tu":[10,0]};
blockTiming["L10"] = {"tu":[10,46]};
blockTiming["L11"] = {"tu":[11,31]};
blockTiming["L12"] = {"tu":[12,16]};
blockTiming["L13"] = {"we":[8,0]};
blockTiming["L14"] = {"we":[8,46]};
blockTiming["L15"] = {"we":[10,0]};
blockTiming["L16"] = {"we":[10,46]};
blockTiming["L19"] = {"th":[8,0]};
blockTiming["L20"] = {"th":[8,46]};
blockTiming["L21"] = {"th":[10,0]};
blockTiming["L22"] = {"th":[10,46]};
blockTiming["L23"] = {"th":[11,31]};
blockTiming["L24"] = {"th":[12,16]};
blockTiming["L25"] = {"fr":[8,0]};
blockTiming["L26"] = {"fr":[8,46]};
blockTiming["L27"] = {"fr":[10,0]};
blockTiming["L28"] = {"fr":[10,46]};
blockTiming["L29"] = {"fr":[11,31]};
blockTiming["L30"] = {"fr":[12,16]};
blockTiming["L31"] = {"mo":[14,0]};
blockTiming["L32"] = {"mo":[14,46]};
blockTiming["L33"] = {"mo":[16,0]};
blockTiming["L34"] = {"mo":[16,46]};
blockTiming["L35"] = {"mo":[17,31]};
blockTiming["L36"] = {"mo":[18,16]};
blockTiming["L37"] = {"tu":[14,0]};
blockTiming["L38"] = {"tu":[14,46]};
blockTiming["L39"] = {"tu":[16,0]};
blockTiming["L40"] = {"tu":[16,46]};
blockTiming["L41"] = {"tu":[17,31]};
blockTiming["L42"] = {"tu":[18,16]};
blockTiming["L43"] = {"we":[14,0]};
blockTiming["L44"] = {"we":[14,46]};
blockTiming["L45"] = {"we":[16,0]};
blockTiming["L46"] = {"we":[16,46]};
blockTiming["L47"] = {"we":[17,31]};
blockTiming["L48"] = {"we":[18,16]};
blockTiming["L49"] = {"th":[14,0]};
blockTiming["L50"] = {"th":[14,46]};
blockTiming["L51"] = {"th":[16,0]};
blockTiming["L52"] = {"th":[16,46]};
blockTiming["L53"] = {"th":[17,31]};
blockTiming["L54"] = {"th":[18,16]};
blockTiming["L55"] = {"fr":[14,0]};
blockTiming["L56"] = {"fr":[14,46]};
blockTiming["L57"] = {"fr":[16,0]};
blockTiming["L58"] = {"fr":[16,46]};
blockTiming["L59"] = {"fr":[17,31]};
blockTiming["L60"] = {"fr":[18,16]};


function reqpage(cookie, save){
    let customRequest = request.defaults({
        headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0'},
        jar: cookie
    });
    return customRequest.post({url: 'https://vtopbeta.vit.ac.in/vtop/processViewTimeTable', form: {semesterSubId: semID}}).then(body => {

        //console.log(body);
        if(configs.save_file==true){
            fs.writeFileSync('timetable.html', body, function (err) {
                if (err) throw err;
                console.log('Time Table saved with file name:timetable.html');
              });}
        console.log('Not Saving Timetable Locally: ')
        //tt = schedule.parseDailyBeta(fs.readFileSync('timetable.html')); for offline debugging
        console.log('Parsing Timetable: ')
        tt = schedule.parseDailyBeta(body); 
        var courses = JSON.parse(JSON.stringify(tt))
        for(course in courses){
            //console.log(courses[course]);
            var course_slots =  courses[course].slot.split('+');
            for(slot in course_slots){
                //console.log(course_slots[slot])
                for(day_slot in blockTiming[course_slots[slot]]){
               // addcal.addClass(course_slots[slot].slot,courses[course].course_code, courses[course].faculty_name, courses[course].course_name, courses[course].venue,Object.keys(blockTiming[slot])[day_slot])
               //console.log(Object.keys(blockTiming[course_slots[slot]])[0]);
              // console.log(day_slot);
                console.log(course_slots[slot]+ '-' + courses[course].course_code +' By '+ courses[course].faculty_name + ' '+courses[course].course_name +' at '+ courses[course].venue +' '+ day_slot)
    
                addClass(course_slots[slot],courses[course].course_code,courses[course].faculty_name,courses[course].course_name,courses[course].venue,days.indexOf(day_slot))
               }
            }
        }


        
        

    });

}   

