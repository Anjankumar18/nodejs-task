const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Anjan:Grmgrm7744@cluster0.p2nhote.mongodb.net/test');
  console.log("connected to db");

  const UsersSchema = new mongoose.Schema({
    name: String
  });
  const Name = mongoose.model('Name', UsersSchema);

  const shiva = new Name({name:"shiva"});
  const Madhu = new Name({name:"Madhu"});
  const vishnu = new Name({name:"vishnu"});
  // await Madhu.save();
  // await shiva.save();
  // await vishnu.save();

  // console.log(await Name.find({name:"vishnu"}));

      console.log(await Name.updateOne({name:"vishnu"},{name:"madhu"}));
  // console.log(await Name.deleteOne({name:"venky"}));

}