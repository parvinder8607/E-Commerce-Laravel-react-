<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\AddressController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::get('/products', [ProductController::class, 'index']); // Fetch all products
Route::get('/products/{id}', [ProductController::class, 'show']); // Fetch product details by ID


Route::middleware('auth:sanctum')->group(function () {
    // Authentication
    Route::post('/logout', [AuthController::class, 'logout']);

    // Cart routes
    Route::get('/cart', [CartController::class, 'index']); // Fetch user's cart
    Route::post('/cart', [CartController::class, 'store']); // Add item to cart
    Route::put('/cart/{cartItemId}', [CartController::class, 'update']); // Update cart item quantity
    Route::delete('/cart/{cartItemId}', [CartController::class, 'destroy']); // Remove item from cart

    // Order routes
    Route::get('/orders', [OrderController::class, 'index']); // Get all orders for the user
    Route::post('/orders', [OrderController::class, 'store']); // Place an order
    Route::get('/orders/{id}', [OrderController::class, 'show']); // Get specific order details

    // Payment routes
    Route::post('/payments', [PaymentController::class, 'store']); // Process a payment
    Route::get('/payments/{id}', [PaymentController::class, 'show']); // View payment details

    // Address routes
    Route::get('/addresses', [AddressController::class, 'index']); // Get user's addresses
    Route::post('/addresses', [AddressController::class, 'store']); // Add new address
    Route::put('/addresses/{id}', [AddressController::class, 'update']); // Update address
    Route::delete('/addresses/{id}', [AddressController::class, 'destroy']); // Delete address
});


