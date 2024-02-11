import { createContext } from "react";

const UserContext = createContext({
    user: {
    name:"pratik",
    email:"dummy@gmail.com",
}
});

export default UserContext;