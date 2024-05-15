import { TOKEN } from "../utils/env.js";

export const asyncHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};


export const requireToken = async (req, res, next) => {
    const token = req.header("x-access-token");
    if (!token) {
        res.status(403).send();
        return
    }

    if (token !== TOKEN) {
        res.status(401).send();
        return
    }
    next();
};