<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home/HomePage'))->name('home');

Route::get('/bess-solar', fn () => Inertia::render('BessSolar/BessSolarPage'))->name('bess-solar');

Route::get('/palash-ev', fn () => Inertia::render('PalashEv/PalashEvPage'))->name('palash-ev');

Route::get('/about', fn () => Inertia::render('About/AboutPage'))->name('about');

Route::get('/careers', fn () => Inertia::render('Careers/CareersPage'))->name('careers');
