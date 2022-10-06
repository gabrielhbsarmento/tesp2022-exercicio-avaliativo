import mongoose, { Schema } from 'mongoose';
export interface UserInteface {
    _id: String;
    name: String;
    username: String;
    email: String;
    address: {
        street: String;
        suite: String;
        city: String;
        zipcode: String;
    };
    phone: String;
}
const userSchema = new Schema(
    {
        name: String,
        username: String,
        email: String,
        address: {
            street: String,
            suite: String,
            city: String,
            zipcode: String,
        },
        phone: String,
    },
    {
        timestamps: true,
    }
);
export const User = mongoose.model('User', userSchema, 'users');
{
}
