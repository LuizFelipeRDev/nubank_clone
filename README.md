# Nu Clone — Nubank

Clone do aplicativo Nubank desenvolvido como trabalho da disciplina de React Native no curso **Serratec**.

Referencias:
[text](inspiracao)

<div align="center">
  <img src="inspiracao/tela03.gif" alt="alt text" />
</div>

## Fluxo das Telas

```
Login → LockScreen → Home
```

| Tela | Rota | Descrição |
|---|---|---|
| **Login** | `StackLogin` | Tela inicial com botão "Usar senha do celular" que navega para a LockScreen |
| **LockScreen** | `StackLock` | Tela de bloqueio com dots. Ao tocar, navega para a Home |
| **Home** | `StackHome` | Tela principal com saldo, cartão, serviços e discover |

A navegação é feita com `@react-navigation/native-stack`, com `headerShown: false`.

## Hooks, useState e Map

### useState

```tsx
const [closeEye, setCloseEye] = useState(false)
```

Controla a exibição/ocultação de valores sensíveis (saldo, fatura, limite). Ao clicar no ícone do olho, alterna entre mostrar os valores ou substituí-los por `<FourDots />`.

### Map

```tsx
{actions.map((item, index) => (
  <View key={index}>
    <IconComponent name={item.iconName} size={24} color="black" />
    <Text>{item.title}</Text>
  </View>
))}
```

Três listas são renderizadas com `map` a partir do `helper.ts`:

- **`actions`** — Pix, Pagar, Transferir, Depositar, Recarga
- **`services`** — Empréstimos, Investimentos, Seguro de Vida
- **`discoveryItems`** — Cards do "Descubra Mais"

## Estrutura de Componentes

```
src/
├── @types/          — Declarações de tipos (.d.ts)
├── assets/          — Imagens (logo, perfil)
├── components/      — BottomMenu, FourDots, Layout, PrimaryButton, SecundaryButton, TopBar
├── layouts/         — Layout (wrapper com TopBar + background roxo)
├── pages/
│   ├── Home/        — Tela principal com saldo, serviços, cartão
│   ├── LockScreen/  — Tela de bloqueio com dots
│   └── Login/       — Tela de login inicial
├── routes/          — Stack Navigator com as 3 rotas
├── styles/          — Tema com cores (COLORS)
App.tsx              — Entry point
```

## Tecnologias

- **Expo SDK 56**
- **React Native 0.85**
- **TypeScript**
- **@react-navigation/native-stack**
- **react-native-vector-icons**
