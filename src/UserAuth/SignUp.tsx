import { useNavigate } from "react-router";

import { Toaster, toast } from 'sonner';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"

const SignUp = () => {
    let navigate = useNavigate();


    const auth = getAuth();

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")


    const createUser = async () => {
        try {

            const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
            localStorage.setItem("userAuthState", "true");
            toast.success("account created");
            navigate("/home");
            window.location.reload();
            return userCredential.user;
        } catch (error) {
            console.error(error);
            toast.error("error can't create Account");
        }
    }




    // : on crée une version animée du bouton ShadCN
    const MotionButton = motion(Button);


    const tapAnimation = {
        scale: 0.5,
    };


    return (
        <Card className="h-screen w-full">
            <Toaster />
            <CardHeader className="justify-center">
                <CardTitle
                >Sign up for an account</CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>

            </CardHeader>
            <CardContent >
                <form>
                    <div className="flex flex-col  gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                onChange={(e) => { setUserEmail(e.target.value) }}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>

                            </div>
                            <Input
                                id="password"
                                type="password"
                                onChange={(e) => { setUserPassword(e.target.value) }}
                                required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">


                <MotionButton
                    type="submit"
                    className="w-full"
                    whileTap={tapAnimation}
                    onClick={createUser}

                >
                    Sign up
                </MotionButton>


                <MotionButton
                    type="submit"
                    className="w-full"
                    variant="outline"
                    whileTap={tapAnimation}
                >
                    Sign up with Google
                </MotionButton>
            </CardFooter>
        </Card>




    )
}

export default SignUp;