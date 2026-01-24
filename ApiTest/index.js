import axios from "axios";
import fs from "fs";

// export async function textToSpeech() {
//   try {
//     const response = await axios.post(
//       "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL",
//       {
//         text: "Please explain closures in JavaScript",
//         voice_settings: {
//           stability: 0.5,
//           similarity_boost: 0.8
//         }
//       },
//       {
//         headers: {
//           "xi-api-key": "",
//           "Content-Type": "application/json"
//         },
//         responseType: "arraybuffer"
//       }
//     );

//     console.log("Status:", response.status);
//     console.log("Content-Type:", response.headers["content-type"]);

//     if (response.status === 200) {
//       fs.writeFileSync("output.mp3", response.data);
//       console.log("✅ Audio file created successfully: output.mp3");
//     } else {
//       console.error("❌ Failed to generate audio. Status:", response.status);
//       console.error("Response:", Buffer.from(response.data).toString());
//     }
//   } catch (error) {
//     console.error("❌ Error occurred:");
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.error("Status:", error.response.status);
//       console.error("Error message:", Buffer.from(error.response.data).toString());
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error("No response received:", error.message);
//     } else {
//       // Something happened in setting up the request
//       console.error("Error:", error.message);
//     }
//   }
// }

// textToSpeech();

