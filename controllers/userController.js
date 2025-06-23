

exports.user0 = ( req , res , next   )=>{
    res.status(200).json({
        name: "army" ,
        age:21
    })
}

exports.user1 = (req , res , next)=>{
   res.status(200).json({
     name:"mum",
     age:21
   })
}

exports.user2 = (req , res , next)=>{
   res.status(200).json({
     name:"paint",
     age:20
   })
}

exports.user3 = (req , res , next)=>{
   res.status(200).json({
     name:"ten",
     age:21
   })
}