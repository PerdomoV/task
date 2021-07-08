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
                            },
                            {
                              timestamps: true,
                              versionKey: false //no almacena el atributo :_v
                              // que es innecesario debido a que ya hay timestamps
                            }
                            );

module.exports = model( 'Task', taskSchema )
