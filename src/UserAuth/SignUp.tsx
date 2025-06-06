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
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {


    // : on crée une version animée du bouton ShadCN
    const MotionButton = motion(Button);


    const hoverAnimation = {
        scale: 0.85,
        duration: 0.5,
        ease: "easeInOut",

    }

    const tapAnimation = {
        scale: 1.05,
    };

    return (
        <Card className="h-screen w-full">
            <CardHeader className="justify-center">
                <CardTitle
                >Sign up for an account</CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>

            </CardHeader>
            <CardContent >
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>

                            </div>
                            <Input id="password" type="password" required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">


                <MotionButton
                    type="submit"
                    className="w-full"
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                >
                    Sign up
                </MotionButton>


                <MotionButton
                    type="submit"
                    className="w-full"
                    variant="outline"
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                >
                    Sign up with Google
                </MotionButton>
            </CardFooter>
        </Card>
    )
}

export default SignUp;