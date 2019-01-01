const baseUrl = 'https://res.cloudinary.com/candidate-evaluation/video/upload';
const startTime = 'start-timing';
const endTime = 'end-timing';
const text = 'text';
const delemiter = '%20';
const comma = '%E2%80%9A';
const questionMark = '%3F';

module.exports.addSubtitlesToVideo = (videoPublicId,subs) => {
    let textUrl = '';
    subs.subtitles.forEach(item => {
        if (item){
            let startMinutes = item[startTime].split(':')[0];
            let startSeconds = item[startTime].split(':')[1];
            let endMinutes = item[endTime].split(':')[0];
            let endSeconds = item[endTime].split(':')[1];
            const textForUrl = item[text].split(' ').join(delemiter).split(',').join(comma).split('?').join(questionMark);
            const newSub = `/l_text:arial_40:${textForUrl},g_south,y_80,so_${startMinutes*60+parseFloat(startSeconds)},eo_${endMinutes*60+parseFloat(endSeconds)}`;
            textUrl = textUrl.concat(newSub);
        }
    })

    return `${baseUrl}${textUrl}/${videoPublicId}.mp4`
}