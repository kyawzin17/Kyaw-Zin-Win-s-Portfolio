import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directory = "./public/images";

if (!fs.existsSync(directory)) {
  console.error(`Error: Folder '${directory}' ကို ရှာမတွေ့ပါ။`);
  process.exit(1);
}

async function convertImages() {
  try {
    const files = fs.readdirSync(directory);
    
    // ပြောင်းမယ့် file extension တွေ သတ်မှတ်မယ်
    const imageExtensions = ['.png', '.jpg', '.jpeg'];

    const targetFiles = files.filter(file => 
      imageExtensions.includes(path.extname(file).toLowerCase())
    );

    if (targetFiles.length === 0) {
      console.log("ပြောင်းလဲစရာ Image file များ မရှိပါ။");
      return;
    }

    console.log(`စတင်ပြောင်းလဲနေပါပြီ... စုစုပေါင်း (${targetFiles.length}) ဖိုင်`);

    for (const file of targetFiles) {
      const inputPath = path.join(directory, file);
      const fileNameWithoutExt = path.parse(file).name;
      const outputPath = path.join(directory, `${fileNameWithoutExt}.webp`);

      await sharp(inputPath)
        .webp({ quality: 90 }) // Quality ကို ၈၀ ထားထားတယ် (စိတ်ကြိုက်ပြင်နိုင်တယ်)
        .toFile(outputPath);

      console.log(`✅ Converted: ${file} -> ${fileNameWithoutExt}.webp`);

      // အောင်မြင်သွားပြီဆိုမှ မူလ file ကို ဖျက်မယ်
      try {
        fs.unlinkSync(inputPath);
        console.log(`Deleted Original: ${file}`);
      } catch (error) {
        console.error(`${file} ကို ဖျက်လို့မရပါ။`, error);
      }
    }

    console.log("\nအားလုံး ပြီးစီးသွားပါပြီ! မူရင်း File တွေကိုလဲ ရှင်းလင်းပြီးပါပြီ!🎉");
  } catch (error) {
    console.error("Error:", error);
  }
}
convertImages();