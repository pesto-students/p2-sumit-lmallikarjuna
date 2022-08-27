SELECT
    *,
    MIN(weight)
FROM
    items;

--------------------------------------------------------------------------

SELECT
    *
FROM
    warehouses
WHERE
    location = 'Pune';

--------------------------------------------------------------------------

SELECT
    *
FROM
    items
WHERE
    itemno IN (
        SELECT
            itemno
        FROM
            order_items
        WHERE
            cno LIKE (
                SELECT
                    cno
                FROM
                    customer
                WHERE
                    cname = 'Abhi'
            )
    );

--------------------------------------------------------------------------

SELECT
    *
FROM
    warehouses wh
    INNER JOIN (
        SELECT
            wid,
            COUNT(wid)
        FROM
            stores
        GROUP BY
            wid
        LIMIT
            1
    ) stores ON wh.wid = stores.wid

--------------------------------------------------------------------------
    
SELECT
    *
FROM
    items it
    INNER JOIN (
        SELECT
            itemno,
            COUNT(itemno) cnt
        FROM
            order_items
        GROUP BY
            itemno
        ORDER BY
            cnt
        LIMIT
            1
    ) item_cnt ON it.itemno = item_cnt.itemno;

--------------------------------------------------------------------------

SELECT
    *
FROM
    items
WHERE
    itemno IN (
        SELECT
            itemno
        FROM
            order_items
    );