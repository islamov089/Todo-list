<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class StoreItemController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'status' => 'required|string|in:pending,in-progress,done',
            'deadline' => 'required|date',
        ]);

        $newItem = Item::create($data);
        return response()->json($newItem, 201);
    }
}
