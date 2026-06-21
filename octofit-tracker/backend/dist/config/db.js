import mongoose from 'mongoose';
export async function connectDatabase(mongoUri) {
    await mongoose.connect(mongoUri);
}
//# sourceMappingURL=db.js.map