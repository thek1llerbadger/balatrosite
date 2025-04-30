        let tentativa = 0;
        let acesso = false;
        let senha = document.getElementById("senha")
        let email = document.getElementsByName("Email")

       function iniciarLogin(){
            while (tentativa < 3 || !acesso) {
                if (senha == 1234 && email == "marcioherobrine@gmail.com")
                {
                    alert("Acesso garantido");
                    acesso = true;
                }else{
                    tentativa++;
                    alert("Senha incorreta, tente novamente. Tentativas restantes: " + (3 - tentativa));
                }
            }

            if (!acesso) {
                alert("Acesso bloqueado. Número máximo de tentativas excedido.");
            }
        }