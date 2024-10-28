import React from 'react';

function Sider() {
    return (
        <div class="flex min-h-screen flex-row">
            <aside class="bg-indigo-900 text-white">
                <div class="p-4">
                    <h2 class="font-bold">Aplikasi SiAKAD</h2>
                    <nav class="mt-4 ml-4">
                        <ul>
                            <li><a class='text-white' href="#">Dashboard</a></li>
                            <li><a class='text-white' href="#">Mahasiswa</a></li>
                            <li><a class='text-white' href="#">Setting</a></li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
}

export default Sider;
