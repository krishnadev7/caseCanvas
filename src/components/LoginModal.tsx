import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import Image from "next/image";
import { DialogDescription } from "@radix-ui/react-dialog";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "./ui/button";

const LoginModal = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="absolute z-[9999999]">

                <DialogHeader>

                    <div className="relative mx-auto w-24 h-24 mb-2">
                        <Image
                            src='/panther-1.png'
                            alt="snake image"
                            className="object-contain"
                            fill
                        />
                    </div>

                    <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
                        Log in to continue
                    </DialogTitle>

                    <DialogDescription className="text-base text-center py-2 ">
                        <span className="font-extrabold text-indigo-900">Don't worry your canvas was saved!</span>{' '}
                        Please login or create an account to complete your purchase.
                    </DialogDescription>

                </DialogHeader>

                <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
                    <LoginLink className={buttonVariants({ variant: 'outline' })}>Login</LoginLink>
                    <RegisterLink className={buttonVariants({ variant: 'default' })}>Sign Up</RegisterLink>
                </div>

            </DialogContent>
        </Dialog>
    )
}

export default LoginModal;