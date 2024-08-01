import { Account, Client,ID} from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66aa0d14003e64e99045');
const account = new Account(client);


export const Login=async(email,password,)=>{
const res=await account.createEmailPasswordSession(email,password)
return res



}




export const signUp = async (email, password,phone) => {
  const res2 = await account.create(email, password,phone);
  return res2;
}