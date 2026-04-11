
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
const zai = await ZAI.create();
const b64 = fs.readFileSync('./upload/pasted_image_1775503100842.png').toString('base64');
const res = await zai.chat.completions.createVision({
  messages: [{ role: 'user', content: [
    { type: 'text', text: 'Analyze this website screenshot. Focus on: 1) How does the hero/dark section transition into the next section? 2) Is there a visible divider, gradient, or shadow between them? 3) What visual treatment separates the dark area from the light area below? 4) Is there a scroll indicator visible? 5) Describe the exact visual transition between the two sections in detail.' },
    { type: 'image_url', image_url: { url: 'data:image/png;base64,' + b64 } }
  ]}],
  thinking: { type: 'disabled' }
});
console.log(res.choices[0]?.message?.content);
