

const get=(model)=>async(req,res)=>{
    try{
        const data=await model.find().lean().exec()
        return res.status(200).send(data)
    }catch(err){
        return res.status(400).send(err.message)
    }
   
}

const post=(model)=>async(req,res)=>{
    try{
        const data=new model(req.body)
        await data.save()
        return res.status(201).send(data)
    }catch(err){
        return res.status(400).send(err.message)
    }
   
}


const patch=(model)=>async(req,res)=>{
    try{
        const data=await model.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if (!data) return res.status(404).send("Not found");
        return res.status(200).send(data)
    }catch(err){
        return res.status(400).send(err.message)
    }
   
}

const deleteo=(model)=>async(req,res)=>{
    try{
        const data=await model.findByIdAndDelete(req.params.id).lean().exec()
        if (!data) return res.status(404).send("Not found");
        return res.status(200).send(data)
    }catch(err){
        return res.status(400).send(err.message)
    }
   
}

const getOne = (model) => async (req, res) => {
    try {
      const items = await model.findById(req.params.id).lean().exec();
      if (!items) return res.status(404).send("Not found"); 
      return res.status(200).send(items);
    } catch (err) {
      return res.status(500).send(err.message);
    }
};


module.exports = {get,patch,post,deleteo,getOne}

  