"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

export default function RegisterSuccess() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsRedirecting(true);
          clearInterval(timer);
          // Auto redirect to login after countdown
          setTimeout(() => {
            // In real Next.js app, use: router.push('/login')
            router.push("/login");
          }, 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  const handleGoToLogin = () => {
    setIsRedirecting(true);
    // In real Next.js app, use: router.push('/login')
    setTimeout(() => {
      router.push("/login");
    }, 500);
  };

  return (
    <div className="w-full max-w-lg">
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm py-10">
        <CardHeader className="text-center">
          {/* Logo */}
          {/* <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg">
              <Package className="h-10 w-10 text-white" />
            </div>
          </div> */}

          {/* Success Animation */}
          <div className="relative mb-8">
            <div className="flex items-center justify-center">
              <div className="p-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg animate-pulse">
                <CheckCircle className="h-20 w-20 text-white" />
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-0 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            <div
              className="absolute top-8 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute bottom-8 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div
              className="absolute bottom-0 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.9s" }}
            ></div>
            <div
              className="absolute top-1/2 left-0 w-2 h-2 bg-green-400 rounded-full animate-bounce"
              style={{ animationDelay: "1.2s" }}
            ></div>
            <div
              className="absolute top-1/2 right-0 w-2 h-2 bg-orange-400 rounded-full animate-bounce"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Selamat!
          </CardTitle>

          <p className="text-xl text-gray-700 font-medium mb-2">
            Akun StockIn Anda berhasil dibuat
          </p>

          <p className="text-gray-600">
            Sekarang Anda bisa mulai mengelola inventori bisnis dengan mudah dan
            efisien.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Main CTA */}
          <Button
            onClick={handleGoToLogin}
            disabled={isRedirecting}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 h-12 text-base shadow-lg"
          >
            {isRedirecting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                Mengarahkan...
              </div>
            ) : (
              <div className="flex items-center">
                Masuk ke StockIn
                <ArrowRight className="ml-3 h-5 w-5" />
              </div>
            )}
          </Button>

          {/* Auto Redirect Info */}
          <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">
              {countdown > 0 ? (
                <>
                  Otomatis mengarahkan ke halaman login dalam{" "}
                  <span className="font-bold text-blue-800 text-lg">
                    {countdown}
                  </span>{" "}
                  detik
                </>
              ) : (
                <span className="text-blue-700 font-semibold">
                  Mengarahkan ke login...
                </span>
              )}
            </p>
          </div>
        </CardContent>
      </Card>
      {/* Welcome Message */}
      {/* <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          Selamat bergabung dengan{" "}
          <span className="font-semibold text-blue-600">StockIn</span> 🎉
        </p>
      </div> */}
    </div>
    // </div>
  );
}
