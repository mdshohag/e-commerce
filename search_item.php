<!--button source....http://purecss.io/buttons/-->
<?php
include('include/header.php');

$searchItem = htmlspecialchars($_REQUEST['searchItem'], ENT_QUOTES, 'UTF-8');
?>
<div class="container">
    <div class="full-page">
        <div class="maincontent-area">
            <div class="zigzag-bottom"></div>
            <div class="container">
                <div class="row">

                    <h2 class="section-title" style="color:white;padding-left:20px;">Search result for "<?php echo $searchItem; ?>"</h2>
                      <?php

                        $catp1 = $db->query("select id from book where pro_type like '%$searchItem%' or title like '%$searchItem%' or price like '%$searchItem%' or book_summary like '%$searchItem%' or discount like '%$searchItem%'");
                        $catr1 = $catp1->fetch_array();
                        $search_i = $catr1[0];

                        if(!empty($search_i))
                        {

                        $catp = $db->query("select * from book where pro_type like '%$searchItem%' or title like '%$searchItem%' or price like '%$searchItem%' or book_summary like '%$searchItem%' or discount like '%$searchItem%' order by id asc limit 0, 20");
                        while($catr = $catp->fetch_assoc())

                        {
                            $bookId = $catr['id'];
                            $pro_type = $catr['pro_type'];
                            $btitle = $catr['title'];
                            $price = $catr['price'];
                            $discount = $catr['discount'];
                            $bimage = $catr['image'];

                    ?>
                    <div  class="col-md-3" style="padding-left:5px;padding-right:35px;padding-bottom:15px;">
                        <div class="single-product"  style="border:1px solid #ffd6cc;padding-bottom:8px;">
                            <div class="product-f-image" style="height:235px">

                                <img src="apanel/title_image/<?php echo $bimage; ?>" style="height:100%;width:98%">
                                <div class="product-hover">
                                    <a href="single-product/book_id/<?php echo $bookId; ?>" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                    <a href="single-product/book_id/<?php echo $bookId;?>" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                                </div>
                            </div>

                            <h2 style="font-weight: bold;font-size:14px;color:#FFFFFF;"><a href="single-product/book_id/<?php echo $bookId; ?>" ><?php echo $btitle; ?></a></h2>

                            <div class="product-carousel-price">
                                <ins style="color: #208000;font-size: 13px;font-weight: bold;"><?php if(!empty($discount)) { ?><span class="desprice">Discount Tk.( <?php echo $discount; ?>)</span><?php } if(!empty($price)) { ?><span class="price">Tk. <?php echo $price; } ?></span></ins>
                            </div>
                        </div>
                    </div>

                            <?php
                        }
                        } else {
                            ?>
                            <div class="catp_count" style="height:90px; text-align:center; padding-top:50px; font-size:24px;color:#222">
                                No Result Found!!
                            </div>
                            <?php
                        }
                      ?>

                 </div>
            </div>
        </div>
    </div>
</div>
<?php
include('include/footer.php');
?>