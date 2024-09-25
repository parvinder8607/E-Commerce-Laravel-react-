<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse; // Import JsonResponse
use App\Models\User; // Import User model if needed
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse // Added return type hint
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'address' => 'required|string',
            'phone' => 'required|string',
            'role' => 'required|in:user,admin',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        // Create a new user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),   
            'address' => $request->address,
            'phone_number' => $request->phone,
            'role' => $request->role,
            'email_verified_at' => now(),
            'remember_token' => \Str::random(10),
            ]);

            
            $token = $user->createToken('authToken')->plainTextToken;

           
            return response()->json(['user' => $user, 'token'   => $token], 201); 
                  

    }
            


    public function login(Request $request): JsonResponse // Added return type hint
    {
        // Validate the request data
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Attempt to authenticate the user
        if (auth()->attempt($request->only('email', 'password'))) {
            // Authentication successful
            $user = auth()->user();
            $token = $user->createToken('authToken')->plainTextToken;

            // You can customize what user information to return
            return response()->json(['user' => $user, 'token' => $token], 200);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }
    public function logout(Request $request): JsonResponse // Added return type hint
    {
        // Revoke the user's token
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully'], 200);
    }

}
