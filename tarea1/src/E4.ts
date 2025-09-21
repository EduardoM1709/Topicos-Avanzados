class CuentaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(monto: number): void {
    if (monto > 0) {
      this.saldo += monto;
      console.log(`Depósito exitoso. Nuevo saldo: ${this.saldo} Lps`);
    } else {
      console.error("El monto a depositar debe ser positivo.");
    }
  }

  retirar(monto: number): void {
    if (monto <= 0) {
      console.error("El monto a retirar debe ser positivo.");
    } else if (monto > this.saldo) {
      console.error("Fondos insuficientes.");
    } else {
      this.saldo -= monto;
      console.log(`Retiro exitoso. Nuevo saldo: ${this.saldo} Lps`);
    }
  }

  consultarSaldo(): void {
    console.log(`El saldo actual de ${this.titular} es: ${this.saldo} Lps`);
  }
}

// Crear instancia y probar métodos
const cuenta1 = new CuentaBancaria("Laura");
cuenta1.depositar(1000);
cuenta1.retirar(200);
cuenta1.consultarSaldo();
cuenta1.retirar(800); 
