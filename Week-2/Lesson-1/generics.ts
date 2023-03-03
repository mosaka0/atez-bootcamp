type Job = {
    name: string,
    state: string,
    start: () => void;
}

type JobRun<J> = {
    job: J;
    state: string;
    onComplete: (cb:(job:J)=>void) => void;
}

type SendEmail = Job & {
    recipientEmail: string;
    subject: string;
}

function enqueueJob<J>(job:J):JobRun<J> {

    return{
        job,
        state: 'que',
        onComplete : (cb:(job:J)=>void) => cb(job)
    }
}

const send :SendEmail = {
    recipientEmail:"sadsad@gmail.com" ,
    subject: "asdasdasd",
    name: "onur",
    state: "aktif",
    start: () => console.log("hi")
}

const run = enqueueJob(send);


