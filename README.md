# <div align="center">**과일 가게**</div>

# [과일가게 놀러가기](http://ec2-43-201-64-87.ap-northeast-2.compute.amazonaws.com/)

### 기간 : 2022.12.01 ~ 2022.12.09

### 개발자 : [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FTeTedo&count_bg=%230D00FF&title_bg=%23000000&icon=darkreader.svg&icon_color=%23FF0000&title=hits&edge_flat=false)](https://github.com/TeTedo)(TeTedo)

### 본인 역할

- **컨트랙트 작성**

  - Token 컨트랙트 : FRT 토큰에 대한 컨트랙트 작성

  - FruitShop 컨트랙트 : 과일 구매, 판매, 보유과일 체크 등에 대한 컨트랙트 작성

- **프론트**

  - 구매하기 : 다른 사람들이 판매중인 과일을 FRT or ETH 로 구매가능, 내가 가진 과일 판매 가능

  - 판매하기 : 다른 사람들이 구매중인 과일을 FRT or ETH 로 판매가능, 내가 필요한 과일 구매 가능

  - 상점 : 과일판매, 토큰 교환

- **지갑연결**

  - 지갑연결 버튼을 통해 메타마스크와 지갑연결

  - goerli testnet 네트워크가 아니라면 메타마스크에 요청하여 네트워크 변경 요청

- **web3 연결**

  - 토큰 스왑 : 이더리움 🔁 토큰 스왑

  - 과일 구매 : 최대 100개 과일별 구매 가능

  - 보유한 과일 확인

  - 과일 거래

- **배포**

  - Docker를 이용하여 AWS EC2에 배포

  - git actions를 이용하여 자동배포화(CD) 구현

---

## 목차

- [**주요 페이지**](#주요-페이지)
  - [MainPage](#Main-Page)
  - [TradePage](#Trade-Page)
  - [SwapPage](#Swap-Page)
- [**주요 기능**](#주요-기능)
  - [지갑 연결](#지갑-연결)
- [**이슈**](#이슈)
  - [구매 하기](#구매-하기)

---

## 사용 **기술**

<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=black"> <img src="https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=Solidity&logoColor=white"> <img src="https://img.shields.io/badge/Web3.js-F16822?style=for-the-badge&logo=Web3.js&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=black">

---

## 주요 페이지

### **Main Page**

<br/>
<img width="530" alt="image" src="https://user-images.githubusercontent.com/107897812/219292669-ab14646a-3651-467d-b15f-5e77398ddceb.png">

<img width="530" alt="image" src="https://user-images.githubusercontent.com/107897812/219294378-1efa3083-d907-4abf-aa4f-40e5a5952f93.png">

<img width="530" alt="image" src="https://user-images.githubusercontent.com/107897812/219294440-b1d1060b-330e-48a5-8938-1ccfd57079b5.png">

<br/>

- 메인 페이지, 보유 과일 확인, 과일 등록 팝업

<br/>

### **Trade Page**

<br/>

![image](https://user-images.githubusercontent.com/107897812/219292930-01e7aa87-f401-4a1f-a6e1-2dc4e2cb5ac8.png)

![image](https://user-images.githubusercontent.com/107897812/219292971-cc25c687-6343-412a-a578-065f77e67f2d.png)

<br/>

- 거래 페이지

<br/>

<br/>

  <br/>

### **Swap Page**

<br/>

![image](https://user-images.githubusercontent.com/107897812/219293239-ee83a46e-6fdf-41f4-bf5c-67e1af9af540.png)

![image](https://user-images.githubusercontent.com/107897812/219293406-5e99e609-863e-42f5-8212-d5d8340ed640.png)

- 상점에서 과일 구매 , 토큰 교환 가능

<br/>

## 주요 기능

### **지갑 연결**

```JS
await window.ethereum
        .request({
          jsonrpc: "2.0",
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x5" }],
        })
        .catch(() => {
          alert("goerli 네트워크에서만 사용가능");
        });
```

지갑 연결 버튼 클릭시 메타마스크에 account 요청

## 이슈

### **구매 하기**

eth로 과일을 구매한다고 과일등록을 할 때 이슈가 발생

거래가 이루어질때 판매자가 트랜잭션을 보낼 때 구매자의 eth를 별도의 트랜잭션 없이 보내는게 불가능

내가 과일을 구매한다고 올릴때 eth를 받아서 해결
