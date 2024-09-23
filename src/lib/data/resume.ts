import { base } from '$app/paths';

const get_resume_url = (file: string) => {
let url=`${base}/resume/${file}`;
console.log("url",url)
return url;
};
export const resume_se =get_resume_url('Resume_Anish_Philip_se.pdf') ;
export const resume_ds=get_resume_url('Resume_Anish_Philip_ds.pdf') ;
export const resume_devops=get_resume_url('Resume_Anish_Philip_devops.pdf') ;

// export const resume_se_drive = 'https://drive.google.com/file/d/1yXpFS4567SSEBzCLmGJJRxWoX5RQRJXZ/view?usp=sharing';
// export const resume_ds_drive='https://drive.google.com/file/d/1e-IK3PYjXRx7cYZyRI9raHLRHMeoSFIs/view?usp=sharing';
// export const resume_devops_drive='https://drive.google.com/file/d/1goeDTEo0fbfV3-Tp0gPJRNnitXq0bRgf/view?usp=sharing'
export const title = 'Resumé';
