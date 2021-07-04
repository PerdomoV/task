const { Schema , model } = require( 'mongoose' )

const taskSchema = new Schema({ 
                                name: {
                                        type: String, 
                                        unique : true, 
                                        required : true,
                                        dropDups: true 
                                      }, 
                                description: {
                                        type: String, 
                                        unique : false, 
                                        required : true,
                                      },
                                date: {
                                       type: Date,
                                       required: true
                                      }
                            });

module.exports = model( 'Task', taskSchema )
