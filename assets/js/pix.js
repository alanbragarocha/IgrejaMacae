function copyPixKey() {
        const pixKey = "00000000-0000-0000-0000-000000000000"; // Substitua pela sua chave PIX
        navigator.clipboard.writeText(pixKey).then(() => {
            alert("Chave PIX copiada com sucesso!");
        }).catch(err => {
            alert("Erro ao copiar a chave PIX: " + err);
        });
    }
    