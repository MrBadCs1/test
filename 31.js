const ffmpeg = require('fluent-ffmpeg');

ffmpeg('https://hugh.cdn.rumble.cloud/video/fww1/c2/s8/2/W/V/r/V/WVrVA.aaa.mkv')
  .outputOptions([
    '-codec:v libx264',
    '-codec:a aac',
    '-hls_time 10',
    '-hls_list_size 0',
    '-f hls'
  ])
  .output('output.m3u8')
  .on('end', () => {
    console.log('แปลงไฟล์เป็น m3u8 สำเร็จ!');
  })
  .run();
