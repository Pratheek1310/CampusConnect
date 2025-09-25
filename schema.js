const joi=require("joi");

module.exports.eventSchema=joi.object({
    listing: joi.object({
title:joi.string().required(),
description:joi.string().required(),
category:joi.string().required(),
 location:joi.string().required(),
email:joi.string().required(),
phonenum:joi.number().required().min(1000000000).max(9999999999),
image:joi.string().allow("",null),
 
    }).required(),
});

module.exports.reviewSchema=joi.object({
    review:joi.object({
        age:joi.number().required(),
        email:joi.string().required(),
        fullname:joi.string().required(),
        cname:joi.string().required(),

    }).required(),
});