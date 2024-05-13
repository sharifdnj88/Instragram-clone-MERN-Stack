import { Vonage } from '@vonage/server-sdk';
// import  axios  from "axios"

export const vonage = new Vonage({
  apiKey: "9c7b6d40",
  apiSecret: "GJ4HjYU0SC7VhhHc"
});

export const sendSMS = () => {
    const from = "Vonage APIs"
    const to = "8801738153971"
    const text = 'Welcome to our Instagram'

    async function sendSMS() {
        await vonage.sms.send({to, from, text})
            .then(resp => { console.log('Message sent successfully'); console.log(resp); })
            .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
    }

    sendSMS();
}


// BulkSMS BD
// export const sendSmsBD = async ( number, message) => {
//     try {
//         await axios.get(`http://bulksmsbd.net/api/smsapi?api_key=G5z3EFo58oK97QaZRZnX&type=text&${number}=Receiver&senderid=8809617613111&message=${message}`);
//     } catch (error) {
//         console.log(error);
//     }
// }