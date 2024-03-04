<?php

namespace App\Http\Controllers;

use App\Models\River;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RiverController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Rivers/Index', [
            'rivers' => River::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Rivers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'lokasi' => 'required|string|max:255',
            'tautan' => 'required|string|max:255',
            'ec' => 'required|integer',
            'tds' => 'required|integer',
            'salinitas' => 'required|numeric',
            'ph' => 'required|numeric',
            'orp' => 'required|integer',
            'sg' => 'required|integer',
            'suhu' => 'required|numeric',
            'kualitas' => 'required|numeric',
        ]);

        $request->user()->rivers()->create($validated);

        return redirect(route('rivers.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(River $river)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(River $river)
    {

        return Inertia::render('Rivers/Edit', [
            'river' => $river,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, River $river): RedirectResponse
    {
        $this->authorize('update', $river);

        $validated = $request->validate([
            'lokasi' => 'required|string|max:255',
            'tautan' => 'required|string|max:255',
            'ec' => 'required|integer',
            'tds' => 'required|integer',
            'salinitas' => 'required|numeric',
            'ph' => 'required|numeric',
            'orp' => 'required|integer',
            'sg' => 'required|integer',
            'suhu' => 'required|numeric',
            'kualitas' => 'required|numeric',
        ]);

        $river->update($validated);

        return redirect(route('rivers.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(River $river): RedirectResponse
    {
        $this->authorize('delete', $river);

        $river->delete();

        return redirect(route('rivers.index'));
    }
}
