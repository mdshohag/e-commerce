<?php
class cls_dashboard
{
    public function con()
    {
        $connect = new cls_dbconfig();
        return $connect->connection();
    }

    public function total_item(){
        $tota_item = $this->con()->query ("SELECT count(id) as id FROM book");
        return $tota_item;
    }
    public function total_sale(){
        $tota_sale = $this->con()->query ("SELECT sum(book_qty) as book_qty FROM tbl_order_details WHERE order_status='Accepted'");
        return $tota_sale;
    }
    public function total_order(){
        $tota_order = $this->con()->query ("SELECT sum(book_qty) as book_qty FROM tbl_order_details WHERE order_status='Processing'");
        return $tota_order;
    }
    public function order_view(){
        $order = $this->con()->query ("SELECT count(order_id) as order_id FROM tbl_order_details WHERE order_status='Processing'");
        return $order;
    }

}
  ?>