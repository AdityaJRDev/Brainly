import mongoose from "mongoose";
export declare const UserModel: mongoose.Model<{
    username: string;
    password: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    username: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ContentModel: mongoose.Model<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map