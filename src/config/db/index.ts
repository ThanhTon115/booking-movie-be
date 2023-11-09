import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/booking_movie_dev');
    console.log('connect successfully');
  } catch (err) {
    console.log(err);
  }
};
export default { connect };
