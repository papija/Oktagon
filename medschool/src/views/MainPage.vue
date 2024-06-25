<template>
<v-main>
    <v-container fluid class="container">
        <strong style="font-size: 18px;">О сайте Medical School</strong>
        <v-divider :thickness="4" class="border-opacity-100" color="#4BA285"></v-divider>
        Добро пожаловать на сайт Medical School - вашего надежного партнера в области спортивного врачевания! Мы предлагаем широкий спектр услуг для спортсменов всех уровней подготовки, включая профессиональных спортсменов, любителей и рекреационных спортсменов. Наша команда опытных специалистов поможет вам достичь максимальных результатов в спорте, обеспечивая качественное медицинское обслуживание, реабилитацию после травм и профилактику спортивных повреждений. Независимо от вашей спортивной дисциплины, у нас вы найдете индивидуальный подход и профессиональное внимание к вашему здоровью и благополучию. Доверьте свое здоровье профессионалам - выберите Medical School!
        <v-container class="picture-container">
        <v-row>
            <v-col>
                <v-img src="../assets/main.png" width="100%"></v-img>
            </v-col>
        </v-row>
        </v-container>
    </v-container>
</v-main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
display: flex;
flex-direction: column;
margin-top: 20px;
width: 1520px;
height: 766px;
}

.v-divider{
 max-width: 60px; 
 border-radius: 5px;
 margin-top: 5px;
 margin-bottom: 5px;
}

.picture-container{
margin-top: 13%;
width: 500px;
height: 500px;
flex: none;
order: 1;
flex-grow: 0;
}
</style>

