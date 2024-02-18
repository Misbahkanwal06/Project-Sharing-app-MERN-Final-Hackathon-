const projectModel= require('./projectModel');

const submitProject = async (req,res) => {
    const { devname, proTitle, description, url } = req.body;
    console.log("hashdj");
    try {
        console.log("misbahkajskjaksa");
        const createProject = new projectModel({
            developerName: devname,
            projectTitle: proTitle,
            description: description,
            hostedURL: url
        });
        await createProject.save();
        console.log(createProject);
        res.status(201).send("Response has been Submitted");
    } catch (error) {
     res.send(error);
    }
}
module.exports = {submitProject};