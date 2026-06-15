form.addEventListener('submit', (e) => {
            e.preventDefault();
            const file = document.getElementById('photo').files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    // 画像をリサイズする処理
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const MAX_WIDTH = 800; // 幅を最大800pxに制限
                        const scale = MAX_WIDTH / img.width;
                        canvas.width = MAX_WIDTH;
                        canvas.height = img.height * scale;
                        
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        
                        // JPEG形式で圧縮率0.7で保存
                        const resizedData = canvas.toDataURL('image/jpeg', 0.7);
                        save(resizedData);
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                save(null);
            }
        });