import React, { useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import BaseLayout from '../layouts/BaseLayout';
import Input from '../components/common/Input';

const AuthPage: React.FC = () => {
  // State to toggle between Login and Sign Up modes
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(prevState => !prevState);
  };

  return (
    <BaseLayout>
      <div className="container-readable flex justify-center items-center py-12 md:py-24">
        <div className="w-full max-w-md p-8 space-y-6 bg-neutral-800 rounded-3xl shadow-lg">
          <div className="text-center mt-12">
            {isLogin ? (
              <LogIn className="mx-auto h-8 w-8 text-primary" />
            ) : (
              <UserPlus className="mx-auto h-8 w-8 text-primary" />
            )}
            <h2 className="mt-4 text-3xl font-bold text-white">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              {isLogin ? 'Sign in to continue.' : 'Get started by creating a new account.'}
            </p>
          </div>

          <form className="space-y-4">
            {/* Fields for Sign Up only */}
            {!isLogin && (
              <>
                <Input id="name" label="Name" type="text" placeholder="Your name" required />
                <Input id="username" label="Username" type="text" placeholder="Choose a username" required />
              </>
            )}

            {/* Fields for both modes */}
            <Input id="email" label="Email" type="email" placeholder="you@example.com" required />
            <Input id="password" label="Password" type="password" placeholder="••••••••" required />

            <button
              type="submit"
              className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-xl
                         hover:bg-primary-dark transition-all duration-300 ease-in-out
                         flex items-center justify-center"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center text-sm text-neutral-400 mt-8">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button onClick={toggleAuthMode} className="ml-2 font-semibold text-primary hover:underline">
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default AuthPage;