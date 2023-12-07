// controllers/jobController.js

const Job = require('../models/Job');



exports.createJob = async (req, res) => {
  try {
    const savedJob = await Job.create(req.body);
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJobs = async (req,res) =>{

  try{
  const Jobs = await Job.find();
  res.json(Jobs);
  }catch(error){
    res.status(500).json({ error: error.message });
  }
}


exports.updateJob= async (req,res)=>{
try{
   const jobId = req.params.id;
   const updateJob = await Job.findByIdAndUpdate(jobId,req.body,{ new: true, runValidators: true })
   if(!updateJob){
    return res.status(404).json({error : "Job not found"});
   }
   res.json(updateJob);
}catch(error){
  res.status(500).json({error : error.message});
}


}

exports.deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const deletedJob = await Job.findByIdAndDelete(jobId);
    if (!deletedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(deletedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
