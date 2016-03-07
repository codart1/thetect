<?php

function cm_img($img_name) {
    echo get_template_directory_uri() . '/img/cm/' . $img_name;
}