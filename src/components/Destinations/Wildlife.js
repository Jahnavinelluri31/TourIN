import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { Card, Row, Col } from 'react-bootstrap';

function Wildlife() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onFormSubmit = (userData) => {
        console.log(userData)
    }
    return (
        <div className='container w-75'>
            <br />
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className='bg-light shadow p-1'>
                        <Card.Img variant="top" className="rounded w-100 shadow" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRUZGRgaGyIcGxsbGyEfJR8fHyMiISMjIRwhIS0kIyIqISEiJjcmKi4xNDQ0ISM6PzozPi0zNDEBCwsLEA8QHxISHTUqJCozNTMzMzMzMzMzMzUzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIALkBEAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEHAP/EAD4QAAECBQIEAwYEBAQHAQAAAAECEQADEiExBEEFUWFxIoGRBhMyQqGxUsHR8BQj4fEVM2KSB0NygqKywtL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQACAwACAgICAwEAAAAAAAAAAQIRIRIxA0FRYSIyBIHwcf/aAAwDAQACEQMRAD8AImLSZcseFRUohRJD2+bHTaE+o0yZf+Xk0s3hBvd2+YgkOO8WrSgyzM2BYDDEki4DYgSTLWFsRUxDnAchw52s1o85OuixnwUll1oUCA0t3cm5Lq3G19jHOJGiYfCFKcFSgSAjfGwF/WKUzCaWUTW1D3CVB3CurOB0iMqf7yYVy/EtCWmEEpUrwkF9lAA/EPw3eJcb7JbKtNxAJWgyyVKlm2WpKrv/AFjWaZS28IdH4sKBByW5ZMZ4yjKYy7JKSAQQWUC5ScMLEOXzDXScRpSCkUmmkqVcOA1rbvvGT3BoZe0CylMshrhwoWJe12DAPc7XMLtAtSXsysFy+PibmHII7w4l6uokKpS7AKy5Atm1h+zAXFNIlIrTkEgpA3J6faBTg24spBwmJXLF1FTDwAlk/wCpvJmi/QaUTCEMwd3AyN+2CBC+UQlSWSWu9yAHy79dodSNQZaQc0tgZOPK0dXiqS3/ACBpmf4xpTLWyQWJNPYfpA2jlJZRWoEi9O2IcrnIMxcyeApDOlJ8TXAZsNvGb4PMUqWPEEpJKmVfJsl+QDdYif8AHTdr+gTHMg0gqbsC5tj1i2cpKkgUpDXPO+zwnVxBSJhlkFTfPVYtgDplt4Kky5alu9yGOQxBYi+3WMp/x66GpX2famSlLkjxDGf31gDUTqwFB+RI2Ahpq0ig/KlIfL1HAv8AlC4OUK+F9ud2v9o5qqTQMWEKcAZVdumxg7RlQFLqTgEg9QCA25FnimUkIVfL8m6/oYnp55XMJTZlC75bH94q7EkNVTpaEgSwEqT6ssF087sMx9KVTKeWsIWQ7827ny7WiidOSFoGFFlEE2823uz7tAmoYpIWEtgZNrnPQxpHyNUDWFc/VLTLpmVGrxhQALqVi+RvbaA5yRNlU1UMSQVDkLjpg+Y6xzU1AJINvlIPKxBw2X/tA8nSqVMWF4SHN25WcbbvyEbwZH0S0SizVquCEJb4RuW584F1MtIKUfGOgNyevPrzh37tIQ6XwE3yQ9y+X3itenTQHIe96mJv+7mLStlexBqJSkgCWWSkkpckkuweOLn+I+JlsPCXdsE9XzB1CErK3UtTlKXG6Q++QH+0CKQHqIG/iF7ljf8ArGn0NIC1IpNNJzdzt1/eYXzJgBNiai3N7f0aDlLIW6gFIIcDsWD+d4guchAsGIsBkX/fOKWCfYPPUBTUSDubn+7ROS6hRUFD4gq4NI+J/wBNiIB92VKcfCDbc9APO0SUtpZS4GEFul1N3JMacQKptSlKIcpJxt/SzC0GaSStLKSqnZQJdwLuD0P5RRJSPg9PP+kW6uaStMtsJAKvVt7D7wm28BEtRqD7sKNR/mEDIJYJFwMwBrdWtgXLYZ4u1s7+UkjaYoBy+wO/eBUzFhD+JlGxYt9opJEtHoIme7rCWaYMAVOHPjA2uDY/lHeFT6pjLSR+JWHFNlMfiIfYwPpp6paKkVKpcAs97N2tBnDtaJiTYJUkg7lsuGI5vi8cXFpA5aRRIUkAiWXcpTTzDXYu1gbX3vDKVpUSiieWIJLEgp8SsVXZiKw+OlhEpU4BFIWCbEjLuQLWsx+l4v18sEISpakp/CQwSQCPEBkHGRkeeMpbpVCNerBFTJQSFM5qSSnL+XnE9NJLkWoYmr8QJf8A7WMHnQJVLNBSoiX/ADEqD+EgEqSXYKSm9sxHTcPCEGtYpN6UYoJu6jg9OkU40gY24dqkVrSEfAmlhiw2CsjvdtzDPWMUq8TABNgXFQa43ezEdOsJ9BpEeBYWAolkggsQnBq5sWfnDSSo+8ZvCSXwaVC+z1BT7dIyXykJX7I6TUWUpRAFNiRUEs4LjfBN+kC6/WTEhgoFJyXYnHS14t4vopikVyaQkF1FiTzxhnv/AHjPTlz6qffpIDG6XTbYs37EdfiarGNsgZszUTTLS6UOEqUL2Ob/AEeL9RpV6daEonpEqYSlpiAaFbOXcJOHyIL9nNRLlJmCYkFarv8AL5NcdmiKeHo1Mx5jqQG6EU3LfLe17x0OVDtBA0vuyJi0kn5Qku3LF7jmIIIUKTszh2JG9+t4hMmkOsWIJBqDMNt9sWiqtJQpTqTcFIG9Wbbl9owlP4EVTV1EiY5bG1zd2wDY2iUqhi7VP1dhFU7UhyA4Crk9T05xQl1An4ieuOVvWPO8mu33YWTKwt7fCHUL35D0iiUDZQLG+e/bMWEkSyUi73I3wMR9p9QCSGAJO+OlmjS/xsqz6Sh83Wd25XaIahT00ggipx15DoAwgqVLUGSlJyb48QF/Lz5RBMs1XYPm9/Fdx2A+sRBSbsHYtlyam5bgHBZxY2O484vnpKAlS2AUTV/8pbsA4xiCJ0xMpJtfAcfGs4AHa5O0L9dqSqWywSoELyMOxbtbMdvjVLSeiRmhSgCzPh+fPmW2jqlJSilIwSHPfpmM9qdSSs9fi6cmhjwqYJiqKqVPzdwPz+8X6oFL0WTFBKpabGlJUt7fEdubBhC5aCAsXe4cBwQA4LdvqYLSCtS/CBSSH3dge0USZzqUogBCE0pvck2zye/lFxKS9gE8JSOaikBLv4He5Ay+zwBq/wAFF93vc2xBWq1BEy5epTENsNtonRUSSAA1ieeN40boGKpLorURSUWw7FRYMP0gnQ6cFQNXgpB2tzzd3uI5qk2OSVqyOlk/WOaTTrmhNvChFJuLgYS/OKbwRWF3Mx7V2GHsckbDf0ikoKidyfjINNIe31/KL1yyQ52FRAwLkAeVz1inRkpmAqAuLlVw3NubYHMwJ/ABeoUpEp0pSoe8cuxZVI3y9hjYxXM1sxTS1J2GOYuT6QT/ABKpgXUwCVJUkHk5QXI5lSQ/LtCsyikuSSliLbbN94Kvslo1+m4kFApCSQom7mxVZxs9osl2mk3StANJBABU1nB8x1MLZ2olia1ASgiqgux3Buz2wd4oWtVblRS6hcDADXbbrHOo6S0zZ8MmmYhSaBU1YF3IGQbWJdRhrpgiYAuWSpJ61XTcs98Fm6RndJxRcuWLJBBAJyVIUHNuZxfn0hzotShlBHhchdg2bEDZJBOdw8cvlg6suLQLq0DSKCiorSolKlqSopQkhgFABm22I8os0SmdBZilTlIJDAOA7M5F4J4jLrkLqSHFSLmyh8qgfzzHJWnZKXN6erP2/KFFuUNxj66LNPIICVVhgA27WB+2RERqKCtAVSlJJFIDub0l/EDt6RajVhCCgB8WJwRYhuW8UTELmJqUwKSGZhgAB91WaHCFA7GPDdYrxKQXDMAz+v67RbqNKiaFVABUwVOAGB3uMXDX5wvky5i0pKglRByNwftyg2UClJY0WskkWv8AXf1io2umDViyXw81Ak2BNiwHIb3DxfKSUkskYYJBdzjGwgmaqm4Sg1oABBcgk/niKlTlKVZkhQp7DdtzGylJ9kpULtRrAQyw7lnZwG5gbv8AeOy5pulfJ77v2vZ4q1MkJUAliGJDByq+SPX6RWvWUVuCVkAoq3f7iwHpGc7rBnVliAwBST5vgxNCSlanJAZm5vf9mOyJ5WCu5Zy5APdPaOymmMRkeG9gdzftfvHNO3rQNHZaay7kbDr0/rHPeoFgE3GWqHrt3iZ0rUgkOqyQS+/KBtWCkgFTh2fJFmxvBC7sZUuYqYqmWkDk2fXbaO10uhy7ZcHZmfoI+0aaL3BOADz5iBOILCQUD4i1RGwNwO5a/kI6vHVUxcsLdVrUqZ6gEilIJvSzn/cbeUKJiymYlRUwsCSDcKsz43xE56ypSqA5ezXvkj6QRopSiDUlwBYciSCM2/SKb0j9mfTNGHukMWZA/wDrygXhKfdzlrd0JCiyd6Xe4/1MGzBk/UMskJqKskZJOzjAeKEhVFKQFfCLi6mN+zm7Q4MrC9NRClXdYZIIsl7m+QwP1EL5kpKKEN4WqWrta3mVFswXr1GW0qqopTSFbleVF+hs/wCkBFaVpUVC6qbNcBIA+pe8a9ItMXT0krY7YLcm35NEJ1TqKSSl6QGbZwW8wIKSaUrUQ5Ip5Ug9PSKJSbgsaSoN/wBtyegPOLQyxCgEjFCRdW3l3L9A8Ar4iqXNNDAOLWtzzvFWpBV8XhSCwA5DpvFMuWgl6r2AJdn6teKUV7JbvA7UTfeBKyVWUQUpSWJuzN0LHk45xXppdUxdaVAZxhTFrZLZ8oguWtJQgKFHz0FruSWwfhIEHacEzCqWFpQlJZibGyQc/Eok53hYuhM7wiUZgnLJYCUsDwuFEuodSRS/lAB1KEpsgFSmBJwWcvbEM61gjxKYLAUgKcAHN9yzuYWCRQpKV7KUkqIa4tZhcv6wL2wHGtQlHuZiXUqZKBVYFlAqB+jeUT0WpclCnTVZje48SfV79I4Qze7DISCQXIbm27cu8VIlGoqsGYpQfobb7xjytkSWj1KlyyqWCS+bOCggFNI2IdXoLQVw2YVBlIR8SaVqHyp6cyLENvC/SzFFalVrCyUl2CncEOdyx36wcnVBKQWCg4AJDFB3FrFzs3K8Zz3Bmp0c0IZVQdQqSkipPhF0semG7RxaawpKTWVMpTgu4t9mHWEi5RnqQCi4dkk0kFVwXsWq2hjLmmUQVJ8dDFLlgxIs18Xd8iObf6KRVqZaylQCQVA2a3oqGCJVIQW8VDkKwCbEADtmBETQp/En4ixZrZv1uH+kVFDAVk1k7XYH1io2kVQ20Cw7AMz25jcfnF0xFyAGAvU43s/eEum1dDmoBrAHG+PMQZpdaZ4ISQyTSpZwDsfMln7RSTfrRa+i3SaRCkCYlZYuL2sNiMWPnFsxHuksaTljljt4SeUdmqVLTSyiQe7vvYb84X6+bMUpTsL/ACtc9H2jZNJdDoVomhJLktsw556s8AalSVqqWknbLG+B2GXG5MFahSgqzknJqq8m2gLVyiqhJdwMk2GNuo/OCvkEiqfqpqElNwjYZA2DNv1MFaJdVLqAFiXz5dYDmaUEEAKdrknwkb9sQbwlCQQDUTlP4cO3WCkukUPjpA0vLt/LSOr3L7Qs4qllEC7WJ7/lDqfNChc3SLPuAc2+0KeJC7gM5vVubb5YdYjyRfpEyTAtSgSwBZTfD4jfdz06QBqCvIWTWTUe/wDaGUrTBmKk+JIILXB5GrcYgKdLILfhAN/23OCKdC4kgihSFJFR5nlv1gvU6oUhkEDZrdXP9YFE4sCXBu9s9e18RKRJBAmKKlO7jpfkO5hVQ6a6AdStaVmWkE1MSxIb+7RJC2Whi7DwvzuzNs94IkpSZi1FTgmlIFnAtbmcx9qZFUxFChdDlIADXx07RqkkJQ0T69aQsMqyQC5Fyq5Lt15dYnNlOhJFqrks7P15cxjEUT5CnBVeokh7d+sWaasIKbku6bWBw3QED7RUXYk9A1GwJcl3x5D7COpNMtdiX73Uc3f1i/XLCGu6ylsWDfm8ArmmhIqzUTb5sD6bxohi7iKKRcPc+XZvWK0IpSonY2L/AFhmpYCU2dsP5XPnA6SCpKQLOxchiCe3OLTE0DTZCipDqTdIYPewAv6Q1ZaJbJLqdJUcMS7DyA9VQKtKELSuYAKizAu7HI6c+zR8QaKgVOVLLtlqRcHIIgejWFemPvD4izbpa7XuPrDDjE5SFUEkv435OAQD+ZilC0mlSUgU2wUuThPIDd+TxXxNZKRMcBY8Jd7kdsWOIKtgbISkGWFM6UvfDhV2bs1+kUKrSQyRcfAS5NVwQdw3NukWqKgPdhBCVqJUlV77ZLizx2ZIMpSaQVEgVKJsAfh8w+Y86Et1mlI5r5pROVLQAAEoI28TAu2SA/PlFmrUhKwmeEpJIWgi9xuzdDDCdowqbLWsVAoBcgMGpYOLva/aBvabRy5ikzACVpDAI8XhNqyNgk8suY0tNmck9ZPRcRWhYUZYXLKg6mYpRUHUL3EWayQVzEitVTsAdycM2QQ0B/xwTQFABPuiAGYKCTe2S+56vEUauppiXAykAuzXYHp+UKMNtBFe2G6dbOD4SnLmwaxA59IuTqHOcCkNuBv1MBzlugqUQ9yQNtz9YA0mqrU9mFm5DEawhb0r7Y8UgkO7fX6xpeCTq5Wf9JsL/rGOn6olDDHSHnCplOnCn/5hFvKNXGkWno+RMvSZhQTYKADP1B/pGc4xpp6ZkwTqTUkLlrQGSoI+IF8KILtfG8PpkoTAG32i0ETEe4mfEzoVyUMGJT9MJKzCmYAFFgCOlyMX/SBVqrFRIbuztsDFerWyrPyJPc7QOqYS9Ngb/wBYhE0Mk6+lNNw7AggOOV8NAytUpKnSC4LsW+8D1kj4t+V/I7xFMx3JdwR6dIdANdLxGlL4JsH25uIv1MxJJXW5YgpF79FHHpGd98a3z12gyZOQpPxF9xhz+7QNDRdJm1EAknJLm7Occ8RZxKWoLK7eJlPthiB5iA0TEg+ItZ26Ww136QTq9SHUXezNkNn6W9YKEymXNBcK2FnL4L8vpBOmnFKSoPYlg3zMLNi9g/KAZMxyQEZIZsFuR2N3vyg1EpaVFQZRU9h8I7kWuW9BEtXgizTTmQUClQDCybnkQ488wFWKipSgi4SC93G5YWD7wzSgkILA3ZQBukdWs2YgiQl3XKyAzvfc+h2LRinxbbQ19g/GZYShCXByayzqL7jZIvAemlkMlPifmdxjoMwZqZaFJLpBEtLA3ZidgchvsekVKQE0YdgQeZ+Vms0beN5V6L7EvFC9TpAIISQLu/Lr1/uAZik19PlYZ8tocaxISlLEB1hwRuA/nveFmpkO1KXVcW3P726RuiSKJVZIU4cEn/pipWlBVYDxGxQpqQL43POCtSpkkA9FbP0ePuHSLFfhBpwNne8NMH3Ql1s0LU70gFgyXcA287E+cGStdWUMkslw7XLsPL82juqkkqqIBSLFVTeX3j7QlSCogg2KUADc5I7JfzIisYUdmrdS5ctzTsbuXD3+nlAyJ1UspUMKFSh/qDXHQxahKkrQFIKsEAWJT1VgdoskmpUwS2qZTpYg1OLUmxLveDoDTpS6lAHsd82iSEKZ1ElTsSA7h8tl9o5NWg4LXdShZn27/rFiD4yVBWzEue30DR5elrocy1qUsINkM5YFxRbfGREAXK1IIqIKagGYJNh5PENIVFblaili/I7WJxBiVBiSggc3wRgX6QRdC9mf1kmtKRMdbF0qFiFKs3V98wenSgSiAsUJWkpTuyrKHUh8xHikvwku7MphZz0AvH3DVqcVAAEgMbBzsY3T/EdUTOlUpCkGWusuAyck/e8ZPhuqKAqqxBKSOxjd6VZYoUv4cgWduTYjHe0Wh93qFKSakTRUei7uPPPmY18M9oAdXFqTd8vDbT+0IlS6Zj0LKgAMuWY+WYx3EFU35RZxSY6JFvxHvcR0tWTdHqHs3xwKWgKPnDrW6ttU7+FKKj5XjBeychSlJP0EPddqa1TkpIKgQFjdKSWFuRIjDyKsRtF+2JtYup3Hk8AoWl2VaxLuz94JmzGcG9wGYer/AEgZCXqcW5td+UJIzCpqTSM4tjbf7xFcxkuEDq/9YZcK0wmAlQ8A6s6ht2HPrBKpMpxXLJIw6nH0tFKLYNCUSDMDJSa1ctzyblDTS8DQC81ZKmalJsH5nn2guZxBKEGhABFrC/nC7S6wrmeI3d4tRDBhN4PJpNIURZwVP0zkRH/DJZF0gd7vDCShZTWhJIFjyPSLf4CYXPu3BvsWhOI00K9Po0iySB0QkffaC0aBLXqJ3qL/AEg9GmKRcBA+sfI1qQfC1t2d4EhuS9AyNKkEU/8AiItVpVH4/Dyc39BDgayrwqLPgxTqAljZzAKxKvh7nwywW+ZV4uk8OByB5AD6mC0qB+LaJDUBMJLbBs7I4akD/wDXiH1i/wB1QzpSUcwkOPpFMrVBRaGUtdQY4ihGZ9p/Z2XMAVLCUKPzpGTs6RZjzjAKCpS1ylgomIapKrhnyDuCMGPZkFhSLtcdoxPtjphMQZgDTEDGXQD4h1Y39Ym9FXs89Qv3i6VIJOW5nboIr4spEspCCXT4Xzc3UXHpHZZKXmAMTZHOo2vyAZ4X64gBQ3SQ2787+bxolomfKCrLqUfw5PkIY6Klaz4mYFw/iJKfr37QsS6iE+EJAF+p3MWGe1IBDhXxYsC/pDask0ukSLlRBveprt1PKHKJbspJwp2CncEbvnfPOFU/SrQpikgA2dPPY9OsFISUgFLBx4W+YPcvtHBNbZazscSxSpjYZakNzDBusFabVIBJSqp7FJLh9mHQPftyjP8A8eoK+GtFynLDoA7g94t0M1CnKBQC1yliTnJOx/KM3B1bJctG842dIvWSwF+lsDnFAQoJqU97hjuLl2/KJrSTlPmP28BydOpCVoqNNWXODc3vGsei0MZuqJBUwLnwm2Lev7MKtdrTMStBAAUGanFN7HLvFk2Z4c4cjqBkNAq5alpSxvm/Ly+0aRikFGR16XcGKtSbaYbsX7FUMOPaUyyku6VJcHtkRzSrpQUqDEyDT3dxHUpZZLWmq9kZvjps4LjaBtCRL1eqmGpR/iFpWBeuWSQU33TYjqkbQL7MTgJyD+Ij73j5U4e8nkvefNP/AJmJkuyvQfrZIQumoKSwoULuk/CfTPIuIhptOpVKEg3NIY5OxitM9gAzv69OmIZaHVsxe6Un6nD8uURXoENdVo0ypaZThbA1X3z97xldXMWCwBS23TnAnFOJrVNKgpny5OPIxVN4lMpbwl92zGqQmxnp+ILrShDkqyrZoae5C5stIytVKiBtzjO6HVKSgABlF/KNz7IaaWiWJyiFLWCU9Bh+5aHQmwrW6sSv5SZbhA3JYcvMwHpOOqQtqWfb97QSnVS5ilpBuT8TWO1jCzVcPYkk4wXaJY0E8Q165qvEooBLJCACD3qBJj5GlaWqZUSUEFTpY0mz2tYwk0pJUVElxYXxzhvpdcVpWjGATsQbRIy1euDAxYjiPWFiFhSA/wC2gLUqKS6TaG0JMfr1vKKVao9IQJ1pif8AFHcQih5L1LHMO9BqzuYwx1fWGvCeIbQmCVm41WpSihXNTd3hbx+XLMlc23hPi7Gx+hhVxLVBRQkKugh/32ij2iWr+A1F7U/nE3YVR57xHSkKoDAoUQxO73t2b0hPN0SyT8txa1wT94d8Yno94o0OtYQokmzFIJAHMl77QuDLUSSR8z/T840i2kRJIFCTUx8T8jncYzHEyEmxUxs13Lb3ienUKrP2sX6xGUlLEKG7hrN5xViSPf8ASaiWpJFl2bxAXPVxA+q4Tp5jPLpOxRt5fvEB6aSgmpIKVekXyVzUfEKwNhm+fJo5GrOijOaz2UmINUoiYD5KA6JdlesBjQrQplpUMMz36MfWNWqd7shcqojdJ5dv0g06iVOFx4he7gjaBxJcEZ81KUQ5Bf67QKtd8d7ZjRjgKFqC5cwj/SXY8r5H5wDxD2fn/wDLCDazEDzYtiBQQ6QhXLIBc4uCws5f0a0UJleLkCz9s39Ydq4ROTdaFYbwioEndxEDwqagP7pSrOCz+XOLQ6Rl/a2T/KSpvgNI8xv6Rl+I6wFSCizSwk941/tgZg0yRMlqSpSgxIaojPoIy87TBejlKppUJi0FXMABQf1aOiHSsxn2F+z2qUiZJUwLrGe8NuIaYy5kxDC61rfotRV9jCLT6dctCJgKVALGFAi19rjzj0scDRqkomIUSaR6bA+uYU2OP2ZDSoBZyWbG4fEErQEJIPQO2W/f3jVL9kFS0PYk/E2wGPPmYzvtFKVLWEKTSW5g1dQ3p5REXci3XEzXEhL+JeBf+0BTNSgXCg3Ldo1Hs77LK1sxS1pUZEsbfOtx4T0AL+cabS+w8tB8MlHncuYuU0sM1GzzZWh1E5H8pwjqaX6B7m/KNrJCpWmRLHxCWlPYtf6vGhm8EUJS1r8IQKgLGwLs8Z7UTwS5MKM2xuKXQiRMKZhrKyRZIBIGN9oNXMWpvG/MF7Qr4vrgiekWLhz0wBF38UilwsE5YQMEGaUUrKT81x2HKB+JcaEsLlSy61MH/AxBv1tiEnFeIVqRQo1ICi45nb0gXQpqUeZvBQGn0GoUU3Lnfzi3UTWS/wBIE0thHOJzGlpPNTQC6LULBGIjMmtAKJ3WKlz4RQUqbeGvCixBPOM6lbmGStVQlnYkb8t/pCfwNYHaTV+8mE81E/WHvtaqnh07Z6Q3cxkOFzaZgHWHvtnMP8ETZqkjz/tCfaF6MTxM1Lbdkf8AoH+0BKWRZL7bdYM4gj+YT+EI/wDRL47wLPXjI5dto0RDOyTSokXSDjqbRdOSEzGSxYAi25gNWoNwxZ8Nb+8H6JPjqUbAGroBckQP5BLT0jRcRL3mY8w2LQxk8RBKg9935c+UYrh2tlzClEtHidvEQxfaCtXqlJdrXyNiLMPN4w46b2bbS0rA8QCiLJF2iaGD3cA7j/65RjtBrZoNKkqpIcWZSVdyRY5jQ6fiCQBUsqs9s+bdoKYDuXScKHWkv2i+TNmJeokjmOXaFMriKGKilQwAWv8AS8HafWIv4gw5bd73gJGcmby/flFiSC7pJDXvv2hYNRLVggnLBy/K4x5ROROdV7gW8K3CT5hx6w0KiPGPZzS6hSVTpa1UikUrIs74fMQ0fsXoZaPdmWVoqKgmYSqk4JHK1oKTrEgWWSAGcsftFo1N3c1Utktz+HB7xfImmLOL+xOlnShKlgSbg1S0Byz2Nmg/gns+jSoCBMWuzALKfowgtEwBJZTb2s/pFn8S4yojzxzh2n2LSyaphZAfm49T2jzn/iT/AJ0jF5agbvhX6GPSkGoWU4jzr/ieHXpulf3TDSVgmMP+HqVJ0qx8qpqy5xYJEP8A+NINOVg8i2ObXhX7DSVo0SGKhWVLwDlRbI5Q/nSVKZysD/rKX7hLekS46NMScd1R/hpik/CRThnuASxvHnmpneFxmPQ/aqTRoppS4AAcOSfiGSSTHl+pU0pShdh/eHBYDZn5gWqctZOCznk1hHqfsNwbSTdBLmTZCFrXVWVAuWWoc+QEeazFGryH6x6r7G6pKdDJTukLsN/GrMVPomPYv9qPZbQy9NOmSpCUTEgUEKNnIGMYJjz3gmm/nK5U/nHq/tJqPeaOcgJNkuH5pZTd2GY8w4UWWrsPziU7RVUMlyykm0LeMzbIQ7EEqb6frDmZKK0EpdwRCXgKzNnTJ5ANJpSG2fbq1/OHfsK9AaNQg/MH7xFcxPMQ440E+6WsJThwW3fr2hHotS5FkhrYH17QJclY5Y6Jq1gQH/KFur4mqYoE7Y2+kMeLKKlIKC9qSwtezws0+mNdObt9WhxS7Jk3dB/DtSag9iCzdo1ntTqSrh8un55t+wSfzjO6+XVPUbM7ANgJZI+ghvxOQV6OQnktZ82AH3hPaY67Qj4mo++UwszO/QC8UzJB8BbYeTOz9w8OtfoStapgKQFFxyDpSS47mK5eiJTSrZWQTa739TbvByoONiQ6U1sASAXPTyhmjSmyOYv0HLoINRoiggqXbJV1G0dpAeopNf4RuQ72+0S5WUo0aCTpZYlkqStBAYJdPrYZgReuAUGkBQ2Ki5Pe/wBo7qNcycha2AJul+7ix7CPkaikjwUt8yi+biEkNsccNWZiCr3KSp2K8/8Asf1g6Qs/8xKEhmYJFX0ADNzhJL4hMsFF+TWHpzaLUcQQQSVBX+kZ7FoKCzRITKsPFY5qBb1ic1aNhU25O3U/pGWXxEqsA1ruQB6HPaDNNqlhOX6WFuzwUBoZSwwJQlzllK/M2i5OreyUjOHt5xkp2rDkrmGksSElgB1Ve8X6DiSSlJG4LJJuNn6OL5vbEIKNRLMtWZaQd2cN2MFIlyxe1rW6/wCo3jMK4oEkAADLE+JR5snHmTFyOJMl1LJL2S1/QfeHaFTNGgIZjfzP1a/1jqjLNyCzcyevwvaEf+IgfMWcfsR8rWAO6iQTYi79hCCmaROoQRkse1/pHmX/ABP4mj30tCWdEt2HNSj+kP8A/GZfiuWTYMMn1aMH7ULXN1CNSJaSEUgpcMqhRZkgu2xi49iadHrnBVplyJUsTD4ZaQQlhdrnF7wcZvNSu+Ppj1jzvgftXNnLWoS0oSEsgYZQOHVkdxaDZHEVIBGpnGatdxLlpcIBwHDf7iRjES3o+OWNPbLWSxpVpMzxrT4U87g4xGK4VLRMaXMIAWlSQT+JSTT9Y1HtRMSNIu3iUw9SP0hB7MTEpmFRZkp3bc5DxSeCrTz6ZPmBVJsU+E23Frx6h7DrfRJSbmtYU52JBAuMMX9Yw/tbRM1S5koAIUx/6iAxU3Uh/rvD/wBmNQRITKTLUVB1KcsGJep3c7DG0VP9SYfsbahLEeFiCCAeYbtiPMkS/dzVo/C49DG0GpIssU72P75xkeMpCdUC/wDmIfv29Izi9ouSyzQezjKE18UKPokxm/Y9zIISPnc3bs0aX2QWDMWmx/lq+0FI0SSAEhAazYN+gDQOVWhxV6ZT2l1KRLMsBio2BuwyS+cxm5EtiFfb849F1fszJmzKpql2DAJ8KWBfkTkwRpvZTSI8SZae6nX9CW+kUvJFRolwbdmWTp0gAgPYsQNmvaE/CpJXPQBioE9nvHoXHpsuXp1EEOpNCAA3xWfPJzGI4E6JgUzggpIGb4PkYUX+LY5fskMOPyWmBg11N1Y/sRpNXw5E3SS2dJUlwU5CiA7dXEL/AGlQFT5ITclFR/7jy23jT8K01MkS1KsFEps5D7OOu8S3+KGv2YhGiAcqQamAyzEYJHQbfeIzOGS1KBJuds/sRrUSpa7EE925Nv0iCkSkZBSRuRy6xnzLpGdRwVIBJSGz4XsBbz/vHZnCyJjABIOQkMWwQ2BGgl6mWRSkqAOSExVXKBdzmylAD7QcmOhSvg0mljMSkjDA2+kBTeAoKQBNUSWfAY7s4fr9IOKQQ3SPk22il5GS4FKODoBV4grw+Gom6vs0Cf4SSsKWtKeaUggbtjPnDzTywRF404PaDm2HFIUq4SF0VEEt287gQRI4OEpU8xAUD4QlRbu5FvrDI6YGLUaUAQKVYJiKTw5CFKdYWl7WLF7ZbnFGp0RSpCUAGpnUFhuzjfrGmRpQbxZL0aRZnaDmJoyPG5Hu1odK1rULMkmlA5K7+cXDhh8DLZ7+KxRYkHJ3jUK0AUBm0RPDge/aG5r4Bf8ATN6rRTU0JSuoKypwwPK7G8Vnhs6Y9UzxJV8DgejsGHJ4050iQLj6GIzdEk3Kd+UHMdGO1XBtSFKCZiUJAf5SS/nfrC8cN1ApSEVAKvMsQf8AaCcH7Rvhw59mtZztFaNIRao5f4ob8q+BKP2ZeZwjUHwhJCCHrKabcmO8T02jmywUy0savEph4t7F3MbCTLrcLWsttVt1/e0Tk6KW972bsPTzg5RYajCcfnTBKaYSVBQDqsfRmhPwvVywVomEurDJchIF/wC2Y9U1fBtOqWpC7oV8QAufMjbnGZ0nsloELCh7xSgXRWpwPJr+cVyilVk/k3dCiTodKs1BSlE3CVWfpbpDfTaVMtJWmUKRb47+XOGet4dLUbEggbBvM3iuRwVFANaiRknc8+XkInmn2yqrpCHVzVkvLpQWYVtc7tZ/7Rm9doJpKCXKgTUbgN0fpHoqODJAKVc3wR19Ir1HB5RW6m6WPnvDTiuhO3hk/ZmauWtRZz7tTBjd7MWg48RnrJmKXQkfKhyS2LEDJ6w2Vw1SVNLTLosCXIJG9ucWnhRYeIXLr7v+piZtN2XBUhQgTZrmXNWDchITg2JBvyi2ROKmClTCElgVIoCnAJ5eIDyhjw/h01BVQpFTECr8PXq0SXoZxLAoLIApCibgWzEUiuVC3V8JlamkzFrQ1QQh+dnJA7YPPlFSfZiWhJWmWutF7zfiPQEY6vDidoVsmoCkAuBfPLkTFumlTQqpBIQPkWHti17FucO3VJix7Rk53B9Sub7wsmosGIUbWtTYEYvaNDpJOoTLSiWyVO9UyYi4fJQly4yw5wZrNKogLUTcYT+2gYaNJRcLSoWa136/pDbtUJUTRw6b7wTJk+spTdCSznny8vrHxnkKCaX8YcLULODhncdIIlSyR+FjahD9w56CBNRONQaWrLH+WwJ6kbEbxFWVYZ78JSqkJIdmBDknfZ77PiIoMp6ZiVBSQ9g4/wBwilKk5MukAs2452IuOZjuo1wQqn3a1F2S90k4yHt5QqGCy5Q6xd/DAmO6feCEZhFHNPpxBkuUIok7QamAlnUIEWBorTHUwEhCSI4JnWIy8x9BYqOKnkDMUr1JAFz5RCf8MUrwPP7QDSOnVKO5gmZOLZaERx++cM1flCKYV76w5QLqtUUsQ4NxEk/DAOqyIQJDPSTT4lHcAcrRehebwvRgRZLzBZLL9dO8OOUByik/Kxe5/LMXar4TAmnzDGuiOq1FyBiC9FP8H7/e8L9V8Ricn4fOFZbiqGyFpNnMAa9fiS0Sl7dop1PxCGSoqy/QB1ZY0kfQxTppoU937wTwz/MHY/aANBg9oOTHxWl2qVvbytA8vUwRqsQCjaAaigzVzaki94EkzFEhL5ixeBFen/zBAmHFE9UCFi9oZSU+DtAOu+Mdx+UHyP8ALPcRV4Q0RQWpv+zElMSDu4iMU8okAogX5RVOCSX37R1G8QXtACP/2Q==" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- NAGARHOLE WILDLIFE SANCTUARY</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 3072</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}>KARNATAKA</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://www.oyorooms.com/blog/wp-content/uploads/2018/07/Tiger-in-Periyar.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- PERIYAR WILDLIFE SANCTUARY</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 3 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 3076</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> KERALA</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow w-100 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZEfFCFPrDATm1Q9jhWndS9Z1fM32L8lXrQ&usqp=CAU" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- MUDUMALAI WILDLIFE SANCTUARY</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 4 NIGHTS, 3 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 3073</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> TAMIL NADU</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="p-1 shadow bg-light">
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://www.gosahin.com/go/p/d/t/1522828956_Koyna-Wildlife-Sanctuary5.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- KOYNA WILDLIFE SANCTUARY</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 1 NIGHT, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 3075</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> MAHARASHTRA</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='shadow p-1 bg-light'>
                        <Card.Img variant="top" className="rounded shadow w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fr-IVHvpkoYcmneBiBGoObvEiYh0CZ95riygxyglZAOzFc2bMM6qUG7I_rcuhMm24wc&usqp=CAU" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- CORINGA WILDLIFE SANCTUARY</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 3 NIGHTS, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 3074</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> ANDHRA PRADESH</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='p-1 shadow bg-light'>
                        <Card.Img variant="top" className="shadow rounded w-100" src="https://www.nativeplanet.com/img/2018/02/7-1517827693.jpg" />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }}><b>KHAMMAM- KABINI WILDLIFE SANCTUARY</b></Card.Title>
                            <Card.Text>
                                <b style={{ fontSize: "15px" }}>Package :</b><em style={{ fontSize: "15px" }}> 2 NIGHTS, 2 DAY-DAILY PACKAGE</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Service starting :</b><em style={{ fontSize: "15px" }}> KHAMMAM</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Package Code :</b><em style={{ fontSize: "15px" }}> 3077</em>
                                <br />
                                <b style={{ fontSize: "15px" }}>Rating :</b> <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} size="1x"></FontAwesomeIcon>
                                <FontAwesomeIcon style={{ color: "orange" }} icon={faStarHalfStroke} size="1x"></FontAwesomeIcon>
                                <br />
                                <b style={{ fontSize: "15px" }}>State :</b><em style={{ fontSize: "15px" }}> KARNATAKA</em>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className='row'>
                                    <div className="col-sm-7 mt-2">
                                        <button type="submit" className="btn btn-warning w-100">Add to Wishlist  <FontAwesomeIcon icon={faHeart} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                    <div className="col-sm-5 mt-2">
                                        <button type="submit" className="btn btn-success w-100">Book   <FontAwesomeIcon style={{ color: "white" }} icon={faPaperPlane} size="1x"></FontAwesomeIcon> </button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <br/>
        </div >
    );
}

export default Wildlife;