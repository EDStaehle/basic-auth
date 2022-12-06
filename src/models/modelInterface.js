'use strict';

class ModelInterface{
  constructor(model){
    this.model = model;
  }

  async create(json){
    try {
      let record = await this.model.create(json);
      return record;
    } catch (e) {
        console.error('we have a modelInterface create error ', e);
        return e;
    }
  };
  async read(id=null){
    try {
      let reading;
        if(id){
           reading =  await this.model.findOne({where: {id}})

        }else{
           reading = await this.model.findAll();
        }
        return reading
    } catch (e) {
      console.error('we have a modelInterface read error ', e);
      return e
    }
  }
  async readManyToOne(id, model){
    try {
        let record = await this.model.findOne({where:{id}, include: model})
        return record
    } catch (e) {
      console.error('we have a modelInterface readManyToOne error ', e);
      return e
    }
  }
  async write(json, id){
    try {
      await this.model.update(json, {where: {id}});
      let recordToUpdate =await this.model.findOne({where: {id}})
      return recordToUpdate;

    } catch (e) {
      console.error('we have a modelInterface write error ', e);
      return e
    }
  }
  async delete(id){
    try {
      console.log('-------------',id,'---------------');
     await this.model.destroy({where: {id}})
     return 'deleted';
    } catch (e) {
      console.error('we have a modelInterface delete error ', e);
      return e
    }
  }
}
module.exports = ModelInterface;
