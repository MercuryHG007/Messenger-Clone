'use client'

import {
    useCallback,
    useState
} from "react"

import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form"

import {
    BsGithub,
    BsGoogle
} from 'react-icons/bs'

import Input from "@/app/components/inputs/Input"
import Button from "@/app/components/Button"
import AuthSocialButton from "./AuthSocialButton"

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        }
        else {
            setVariant('LOGIN')
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        if (variant === 'REGISTER') {
            // axios register
        }

        if (variant === 'LOGIN') {
            // nextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)

        // NextAuth Social SignIn
    }

    return (
        <div
            className="mt-8 sm:mx-auto sm:w-full sm:max-w-md "
        >
            <div
                className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 "
            >
                <form
                    className="space-y-6 "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input
                            id="name"
                            label="Name"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        id="email"
                        label="Email Address"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        id="password"
                        label="Password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >
                            {variant === 'LOGIN' ? 'Sign In' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div
                    className="mt-6"
                >
                    <div
                        className="relative"
                    >
                        <div
                            className="absolute inset-0 flex items-center"
                        >
                            <div
                                className="w-full border-t border-gray-300 "
                            />
                        </div>
                        <div
                            className="relative flex justify-center text-sm"
                        >
                            <span 
                                className="bg-white px-2 text-gray-500"
                            >
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div
                        className="mt-6 flex gap-2"
                    >
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                    </div>
                </div>

                <div
                    className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500"
                >
                    <div>
                        {variant==='LOGIN' ? 'New to MercuryMessenger?' : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className="underline decoration-sky-500 decoration-[1.5px] cursor-pointer text-sky-400 hover:text-sky-600"
                    >
                        {variant==='LOGIN' ? 'Sign Up' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm