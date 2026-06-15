// 修正した保存処理部分
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const file = document.getElementById('photo').files[0];
            
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    save(e.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                save(null);
            }
        });

        function save(photo) {
            try {
                const data = JSON.parse(localStorage.getItem('knits') || '[]');
                data.push({
                    title: document.getElementById('title').value,
                    date: document.getElementById('date').value,
                    materials: document.getElementById('materials').value,
                    photo: photo
                });
                localStorage.setItem('knits', JSON.stringify(data));
                
                // ここでリセットと画面切り替えを行う
                form.reset();
                loadData();
                showTab('home');
            } catch (error) {
                alert("保存に失敗しました。写真のサイズが大きすぎる可能性があります。");
                console.error(error);
            }
        }