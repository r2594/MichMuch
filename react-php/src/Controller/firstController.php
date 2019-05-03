<?php
// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class firstController
{
    public function index()
    {
        return new Response(
            '<html><body>HIIIIII</body></html>'
        );
    }
}